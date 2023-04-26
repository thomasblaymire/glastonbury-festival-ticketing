import bcrypt from 'bcrypt'
import Joi from 'joi'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'
import { sendVerificationEmail } from '@/lib/email/verification'

type Data = {
  message: string
}

const schema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }

  const { firstName, lastName, email, password } = req.body

  // Validate the input
  const validationResult = schema.validate({
    firstName,
    lastName,
    email,
    password,
  })

  if (validationResult.error) {
    res.status(400).json({ message: validationResult.error.message })
    return
  }

  try {
    // Check if the email is already taken
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      res.status(400).json({ message: 'Email is already taken' })
      return
    }

    // Hash the password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Generate a publicId
    const publicId = `GLASTO-${Date.now().toString(36)}-${Math.random()
      .toString(36)
      .substr(2, 5)}-${Math.random().toString(36).substr(2, 5)}`

    // Store the user in the database
    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        publicId,
        password: hashedPassword,
      },
    })

    // Generate a token for email verification
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
    })

    // Send the email verification link
    await sendVerificationEmail(email, token)

    res.status(200).json({
      message:
        'Account registered successfully. Please check your email to verify your account.',
    })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

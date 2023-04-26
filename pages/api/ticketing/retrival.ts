import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { email, uniqueCode } = req.body

      // Validate the unique code and check if the user is eligible to claim tickets
      const ticket = await prisma.ticket.findUnique({
        where: { confirmationCode: uniqueCode },
        include: { member: { include: { user: true } } },
      })

      if (
        !ticket ||
        ticket.claimed ||
        ticket.confirmationExpires < new Date()
      ) {
        return res.status(400).json({ message: 'Invalid or expired code.' })
      }

      // Create or update user
      const user = await prisma.user.upsert({
        where: { email },
        update: { emailVerified: true },
        create: {
          email,
          emailVerified: true,
          // Add other necessary fields for user creation
        },
      })

      // Update ticket status and member
      await prisma.ticket.update({
        where: { id: ticket.id },
        data: {
          claimed: true,
          status: 'reserved',
          member: {
            connectOrCreate: {
              create: { user: { connect: { id: user.id } } },
              where: { memberId: ticket.memberId },
            },
          },
        },
      })

      // Send email confirmation
      await sendConfirmationEmail(user.email, ticket.id)

      res.status(200).json({ message: 'Successfully claimed tickets.' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' })
  }
}

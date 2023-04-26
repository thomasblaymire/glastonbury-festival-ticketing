import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set in the environment variables')
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { email, amount, token, ticketId } = req.body

      // Find the user
      const user = await prisma.user.findUnique({ where: { email } })

      if (!user) {
        return res.status(400).json({ message: 'User not found.' })
      }

      // Create a Stripe charge
      const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: 'usd',
        source: token,
        description: `Payment for ticket ${ticketId}`,
      })

      // Update ticket status after successful payment
      await prisma.ticket.update({
        where: { id: ticketId },
        data: {
          status: 'paid',
        },
      })

      // Send email confirmation
      // Use AWS SES to send emails

      res.status(200).json({ message: 'Payment successful.' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' })
  }
}

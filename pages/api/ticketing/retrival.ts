import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { sendTicketConfirmationEmail } from '@/lib/email/ticket-confirmation'

async function getAuthenticatedUser(req: NextApiRequest): Promise<any | null> {
  // TODO: base auth handling TODO
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { uniqueCode } = req.body

      // Get the authenticated user
      const authenticatedUser = await getAuthenticatedUser(req)
      if (!authenticatedUser) {
        return res.status(401).json({ message: 'Unauthorized' })
      }

      // Validate the unique code and check if the user is eligible to claim tickets
      const ticket = await prisma.ticket.findUnique({
        where: { confirmationCode: uniqueCode },
      })

      if (
        !ticket ||
        ticket.claimed ||
        (ticket.confirmationExpires && ticket.confirmationExpires < new Date())
      ) {
        return res.status(400).json({ message: 'Invalid or expired code.' })
      }

      // Get the list of members for the authenticated user
      const members = await prisma.member.findMany({
        where: { userId: authenticatedUser.id },
      })

      // Claim tickets for all members
      for (const member of members) {
        await prisma.ticket.update({
          where: { memberId: member.memberId },
          data: {
            claimed: true,
            status: 'reserved',
          },
        })
      }

      // Send email confirmations
      for (const member of members) {
        const memberUser = await prisma.user.findUnique({
          where: { id: member.userId },
        })
        if (memberUser) {
          await sendTicketConfirmationEmail(
            memberUser.email,
            memberUser.firstName
          )
        }
      }

      res
        .status(200)
        .json({ message: 'Successfully claimed tickets for all members.' })
    } catch (error) {
      res.status(500).json({ message: 'Internal server error.' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' })
  }
}

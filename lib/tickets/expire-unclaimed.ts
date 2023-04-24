import { prisma } from '../prisma'

async function expireUnclaimedTickets() {
  // Set the status of expired unclaimed tickets to 'available' for a later release
  await prisma.ticket.updateMany({
    where: {
      confirmationExpires: {
        lte: new Date(),
      },
      claimed: false,
    },
    data: {
      status: 'available',
      memberId: null,
      confirmationCode: null,
      confirmationExpires: null,
    },
  })
}

expireUnclaimedTickets()

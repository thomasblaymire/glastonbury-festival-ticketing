import { prisma } from '../prisma'

async function releaseTickets() {
  // Retrieve unclaimed tickets with release date less than or equal to the current date
  const tickets = await prisma.ticket.findMany({
    where: {
      releaseDate: {
        lte: new Date(),
      },
      claimed: false,
    },
  })

  // Send unique email codes to random users using SES
}

releaseTickets()

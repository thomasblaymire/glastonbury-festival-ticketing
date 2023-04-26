import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      password: 'johnspassword',
      emailVerified: false,
      publicId: 'uniquePublicId1',
      firstName: 'John',
      lastName: 'Doe',
      userRoles: {
        create: {
          role: 'USER',
        },
      },
      members: {
        create: [
          {
            firstName: 'Alice',
            lastName: 'Smith',
            memberId: 'uniqueMemberId1',
          },
        ],
      },
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'alice@example.com',
      password: 'alicespassword',
      emailVerified: false,
      publicId: 'uniquePublicId2',
      firstName: 'Alice',
      lastName: 'Smith',
      userRoles: {
        create: {
          role: 'USER',
        },
      },
    },
  })

  const ticket1 = await prisma.ticket.create({
    data: {
      memberId: 'uniqueMemberId1',
      claimed: false,
      status: 'available',
      confirmationCode: 'uniqueConfirmationCode1',
      confirmationExpires: new Date('2023-05-01T00:00:00.000Z'),
      releaseDate: new Date('2023-04-01T00:00:00.000Z'),
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

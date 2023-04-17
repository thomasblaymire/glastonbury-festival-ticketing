import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed data here
  const user1 = await prisma.user.create({
    data: {
      email: "john@example.com",
      publicId: "uniquePublicId1",
      members: {
        create: [
          {
            firstName: "Alice",
            lastName: "Smith",
            memberId: "uniqueMemberId1",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

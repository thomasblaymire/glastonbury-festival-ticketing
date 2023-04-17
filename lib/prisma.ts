import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

// Check if the environment is in development and supports the `prisma` global object
if (typeof global.prisma === "undefined") {
  global.prisma = new PrismaClient();
}

export const prisma = global.prisma;

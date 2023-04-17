// pages/api/auth/verify-email.ts

import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const { token } = req.query;

    if (!token) {
      res.status(400).json({ message: "Invalid token." });
      return;
    }

    // Verify the token
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET);

    // Update the user's emailVerified field to true
    const user = await prisma.user.update({
      where: { email: decoded.email },
      data: {
        emailVerified: true,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User not found." });
      return;
    }

    res.status(200).json({ message: "Email successfully verified." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    // Close the Prisma connection
    await prisma.$disconnect();
  }
}

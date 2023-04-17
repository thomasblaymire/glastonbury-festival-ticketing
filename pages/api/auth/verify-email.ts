import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { signJWT } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

type Data = {
  message: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  try {
    const { token } = req.body;

    if (!token) {
      res.status(400).json({ message: "Invalid token." });
      return;
    }

    // Verify the token
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string
    );

    // Update the user's emailVerified field to true
    const user = await prisma.user.update({
      where: { email: (decoded as any).email },
      data: {
        emailVerified: true,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User not found." });
      return;
    }

    res.status(200).json({
      message: "Email successfully verified.",
      token: signJWT(user),
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

export function signJWT(user: User): string {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const secret = process.env.JWT_SECRET as string;
  const options = {
    expiresIn: "1d", // Set the token to expire in 1 day
  };

  return jwt.sign(payload, secret, options);
}

export function setAuthToken(token: string) {
  const maxAge = 86400; // 1 day
  const expires = new Date(Date.now() + maxAge * 1000);
  document.cookie = `authToken=${token};path=/;expires=${expires.toUTCString()};max-age=${maxAge};SameSite=Lax`;
}

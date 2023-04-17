import AWS, { SES } from "aws-sdk";
import nodemailer from "nodemailer";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const sesTransport = new SES({ apiVersion: "2010-12-01" });

const transporter = nodemailer.createTransport({
  SES: { ses: sesTransport, aws: AWS },
});

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`;

  const mailOptions = {
    from: `${process.env.ADMIN_EMAIL_USER}`,
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email address: ${verificationUrl}`,
    html: `Please click the following link to verify your email address: <a href="${verificationUrl}">${verificationUrl}</a>`,
  };

  await transporter.sendMail(mailOptions);
}

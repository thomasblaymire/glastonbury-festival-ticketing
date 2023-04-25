import { transporter } from './transporter'

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}`

  const mailOptions = {
    from: `${process.env.ADMIN_EMAIL_USER}`,
    to: email,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email address: ${verificationUrl}`,
    html: `Please click the following link to verify your email address: <a href="${verificationUrl}">${verificationUrl}</a>`,
  }

  await transporter.sendMail(mailOptions)
}

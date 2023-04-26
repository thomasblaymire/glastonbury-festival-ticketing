import { transporter } from './transporter'

export async function sendTicketConfirmationEmail(
  email: string,
  firstName: string
) {
  const mailOptions = {
    from: `${process.env.ADMIN_EMAIL_USER}`,
    to: email,
    subject: 'Your Going to Glastonbury Festival!',
    text: `Congradulations ${firstName} Your tickets are secured for Glastonbiry Festival 2024! Log into your account to see your tickets.`,
    html: `Please login to your account <a href="http://localhost:3000/login">My Account</a>`,
  }

  await transporter.sendMail(mailOptions)
}

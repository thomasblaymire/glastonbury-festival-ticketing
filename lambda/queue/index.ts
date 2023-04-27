import { SQSEvent, SQSHandler } from 'aws-lambda'
import { transporter } from '../../lib/email/transporter'
import type { Options as MailOptions } from 'nodemailer/lib/mailer'

export const handler: SQSHandler = async (event: SQSEvent) => {
  for (const record of event.Records) {
    const message = JSON.parse(record.body)
    await sendEmail(message.email, message.emailCode, message.totalTickets)
  }
}

async function sendEmail(
  email: string,
  emailCode: string,
  totalTickets: number
) {
  const mailOptions: MailOptions = {
    from: `${process.env.ADMIN_EMAIL_USER}`,
    to: email,
    subject: 'Congratulations - Redeem your tickets for Glastonbury Festival',
    text: `Here is your unique code: ${emailCode}. You can redeem ${totalTickets} tickets for you and your friends/family.`,
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    console.log(`Email sent to ${email}: ${result.messageId}`)
  } catch (error) {
    console.error(
      `Error sending email to ${email}: ${(error as Error).message}`
    )
  }
}

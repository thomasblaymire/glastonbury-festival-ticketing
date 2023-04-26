import { prisma } from '@/lib/prisma'
import { sqs } from '@/lib/email/transporter'
import { APIGatewayProxyHandler } from 'aws-lambda'
import { SendMessageRequest } from 'aws-sdk/clients/sqs'

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  // Retrieve 500 random users
  const users = await prisma.user.findMany({
    // take: 500,
    take: 1,
    orderBy: {
      createdAt: 'asc',
    },
    include: {
      members: true,
    },
  })

  // Create tickets and email codes
  const ticketsToCreate = users.map((user: any) => {
    const totalTickets = 1 + user.members.length
    return {
      memberId: user.publicId,
      emailCode: generateRandomCode(),
      email: user.email,
      totalTickets,
    }
  })

  // Save tickets in the database
  const createdTickets = await prisma.ticket.createMany({
    data: ticketsToCreate,
  })

  // Send unique email codes to random users using SES
  await Promise.all(
    ticketsToCreate.map((ticket: any) =>
      sendToSQSQueue(ticket.email, ticket.emailCode, ticket.totalTickets)
    )
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Tickets released successfully.' }),
  }
}

function generateRandomCode(): string {
  return Math.random().toString(36).substr(2, 10)
}

async function sendToSQSQueue(
  email: string,
  emailCode: string,
  totalTickets: number
) {
  const params: SendMessageRequest = {
    MessageBody: JSON.stringify({
      email,
      emailCode,
      totalTickets,
    }),
    QueueUrl: process.env.AWS_FULL_SQS_URL!,
  }

  try {
    await sqs.sendMessage(params).promise()
    console.log(`Message sent to SQS for ${email}`)
  } catch (error) {
    console.error(
      `Error sending message to SQS for ${email}: ${(error as Error).message}`
    )
  }
}

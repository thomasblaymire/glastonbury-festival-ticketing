import AWS, { SES } from 'aws-sdk'
import nodemailer from 'nodemailer'

AWS.config.update({
  accessKeyId: process.env.AWS_FULL_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_FULL_SECRET_ACCESS_KEY,
  region: process.env.AWS_FULL_REGION,
})

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

const sesTransport = new SES({ apiVersion: '2010-12-01' })

const transporter = nodemailer.createTransport({
  SES: { ses: sesTransport, aws: AWS },
})

export { transporter, sqs }

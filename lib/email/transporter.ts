import AWS, { SES } from 'aws-sdk'
import nodemailer from 'nodemailer'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const sesTransport = new SES({ apiVersion: '2010-12-01' })

export const transporter = nodemailer.createTransport({
  SES: { ses: sesTransport, aws: AWS },
})

<h1 >
  Glastonbury Ticket Registration
  <br>
</h1>

## Problem
Every year Glastonbury Festival sells out in a matter of minutes 😭 

The current system requires that you register online and then when tickets go on sale you join a massive queue to buy them. 

Often you get through to a multi-stage form and then due to the sheer amount of traffic the website crashes and you lose your place in the queue causing frustration for you as a customer and negative PR for the festival organizers. It's also a bit unfair for people who get tickets year after year just because of sheer luck.

## Solution 
- A new fair ticket system will allow individuals to pre-register and add up to 5 members to their account for family/friends who they want to take with them.

- The tickets will then be released from the pool on release day. Customers who are selected will receive a private email invite to claim their tickets within 48 hours before they are released back into the pool. (Yay no more queuing)

- We can easily track what users were allocated tickets last year and update their likelihood of being selected again.

Additional features such as VIP/Artist tickets along with QR code and barcode scanning will also be implemented. 
  
## Features (WIP)
- Register, Login, Logout
- Ticket Registration (5 additional tickets per account)
- Ticket Claiming via Email Link
- Virtual Ticket (QR Code)
- Success/Error Pages
- Payment Integration (Stripe)
- Support Pages
- Admin Dashboard (Claims) 

## Live URL

<strong>TBC</strong>

## Screenshot

TBC


## Tech Stack 

- NextJS 13
- Prisma
- React Query
- Hooks
- React Testing Library
- TailwindCSS
- React Icons
- Stripe
- SQL (PlanetScale)
- CI Vercel (NextJS)

## Email Release

- Serverless Framework
- AWS SES (Email Service)
- AWS SQS (Email Queue Service)
- AWS Lambda (Release & Ticket Batcher)
- AWS CloudFormation


## How To Use

The most simple way to run this application is by using npm or yarn. Simply clone using GitHub then run the following commands:


##### Go into relevant directory:
`$ cd glastonbury-festival-ticketing`

##### Install dependencies
`$ npm install`

##### Run the service
`$ npm run dev`

# Build the web app
`$ npm run build`

Please check out the package.json files for more information on additional commands.


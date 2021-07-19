# Headless WooCommerce with Next.js

This repo is an example of how to use the WooCommerce REST API to create a headless e-commerce solution.

WooCommerce is owned by Automattic who, in turn, own WordPress and used by many people globally. The core platform is also free to use which is a nice incentive in itself.

Next.js is a React framework that makes it easy to code for both the front-end and the back-end. Whilst WooCommerce has REST API endpoints that you can consume on the front-end, you will need to consider security aspects for e-commerce and the more secure environment is on the server-side. For this reason, we will need to execute some functions server-side (e.g. process card payment).

## Environment Variables

Ensure you have a `.env.local` file with any necessary environment variables.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

import { PaymentIntent } from "./types/stripeTypes";
import { LineItem, Order } from "./types/wooCommerceTypes";

const axios = require("axios").default;

// creates a re-usable instance of axios with predefined configuration //
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//----------- GENERAL NOTE --------------//
// These custom endpoints are acting as middlemen to the WooCommerce API.  There are two reasons why I'm doing it like this.
// 1. We need to pass consumerKey and consumerSecret to the WooCommerceRestApi client. I am serving these up as environment variables which are only available server-side.
// 2. It is more secure to run these functions server-side
//---------------------------------------//

// hits the create-order API endpoint to create a new WooCommerce order //
export async function createOrderApi(
  lineItems: LineItem[],
  paymentIntentId: string
) {
  // create order data
  const data: Order = {
    payment_method: "stripe",
    payment_method_title: "Card",
    set_paid: false,
    line_items: lineItems,
    meta_data: [
      {
        key: "_stripe_intent_id",
        value: paymentIntentId,
      },
    ],
  };

  try {
    const response = await instance.post("create-order", data);
    return response.data as Order;
  } catch (err) {
    throw new Error(err);
  }
}

// hits the create-payment-intent API endpoint to create a new Stripe payment intent and return client secret //
export async function createPaymentIntentApi(data: LineItem[]) {
  try {
    const response = await instance.post("create-payment-intent", data);
    return response.data as PaymentIntent;
  } catch (err) {
    throw new Error(err);
  }
}

import { Order } from "./types/wooCommerceTypes";

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
export async function createOrderApi(data: Order) {
  try {
    const response = await instance.post("create-order", data);
    console.log("--CREATED WOOCOMMERCE ORDER: ", response.data);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

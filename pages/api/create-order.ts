import type { NextApiRequest, NextApiResponse } from "next";
import { createWooCommerceOrder } from "../../utils/wooCommerceApi";
import { Order } from "../../utils/types/wooCommerceTypes";

type Data = {
  order: Order;
};

export default async function handler(
  req: NextApiRequest,
  // NOTE: not necessary to define at the moment because the response has an <any> type //
  res: NextApiResponse<Data>
) {
  const data: Order = req.body;

  try {
    const response = await createWooCommerceOrder(data);
    res.json({ order: response.data });
  } catch (error) {
    throw new Error(error);
  }
}

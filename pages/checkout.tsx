import { NavLayout } from "../layout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardPayment } from "../containers";
import { useAppSelector } from "../store/hooks";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const lineItems = useAppSelector((state) => state.cart.lineItems);

  return (
    <NavLayout title="Checkout" description="Checkout">
      <Elements stripe={stripePromise}>
        <CardPayment lineItems={lineItems} />
      </Elements>
    </NavLayout>
  );
}

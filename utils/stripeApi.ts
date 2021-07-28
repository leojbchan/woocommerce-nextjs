import { CardNumberElement } from "@stripe/react-stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

export async function confirmCardPayment(
  elements: StripeElements,
  stripe: Stripe,
  clientSecret: string
) {
  // create Stripe confirm payment method data
  // TODO add more data for Stripe to hold if necessary.  Receipt email is usually a good idea
  const paymentMethod = {
    payment_method: {
      card: elements.getElement(CardNumberElement)!,
      // billing_details: {},
      // shipping: {},
      // receipt_email: ''
    },
  };
  // use Stripe client secret to process card payment method
  try {
    const result = await stripe.confirmCardPayment(clientSecret, paymentMethod);
    if (result.error) {
      throw new Error(result.error.message);
    }
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

// whilst not an API call it checks if the Stripe elements are valid or not
export const checkStripeElementsValid = () => {
  const cardNumber = document.getElementById("card-number-element")!;
  const cardExpiry = document.getElementById("card-expiry-element")!;
  const cardCVC = document.getElementById("card-cvc-element")!;

  if (
    cardNumber.classList.contains("StripeElement--complete") &&
    cardExpiry.classList.contains("StripeElement--complete") &&
    cardCVC.classList.contains("StripeElement--complete")
  ) {
    return true;
  }
  return false;
};

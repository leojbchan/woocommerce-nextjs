import { NavLayout } from "../layout";
import { useAppSelector } from "../store/hooks";
import { Cart } from "../features";

export default function CartPage() {
  const cartState = useAppSelector((state) => state.cart);

  return (
    <NavLayout title="Cart" description="Cart">
      <Cart lineItems={cartState.lineItems} />
    </NavLayout>
  );
}

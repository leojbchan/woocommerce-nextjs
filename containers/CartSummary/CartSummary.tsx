import styled from "styled-components";
import CartSummaryLine from "../../components/CartSummaryLine/CartSummaryLine";
import { LineItem } from "../../utils/types/wooCommerceTypes";

interface Props {
  lineItems: LineItem[];
}

const CartSummary = (props: Props) => {
  function calculateCartTotal(lineItems: LineItem[]) {
    if (!lineItems.length) return "£0.00";

    const totalsArray = lineItems.map((lineItem) => {
      return parseFloat(lineItem.price!) * 100 * lineItem.quantity;
    });
    const total = totalsArray.reduce((prev, next) => prev + next);
    const formattedTotal = `£${(total / 100).toFixed(2)}`;
    return formattedTotal;
  }

  return (
    <Wrapper>
      <CartSummaryLine
        title="Total"
        price={calculateCartTotal(props.lineItems)}
      />
    </Wrapper>
  );
};

export default CartSummary;

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0;
`;

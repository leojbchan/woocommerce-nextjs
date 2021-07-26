import { Fragment } from "react";
import styled from "styled-components";
import { CartHeader, CTA } from "../../components";
import { CartItem, CartSummary } from "../../containers";
import { LineItem } from "../../utils/types/wooCommerceTypes";
import { useRouter } from "next/router";

interface Props {
  lineItems: LineItem[];
}

const Cart = (props: Props) => {
  const { lineItems } = props;
  const router = useRouter();

  const createCart = (lineItems: LineItem[]) => {
    return (
      <Fragment>
        <CartHeader />
        {lineItems.map((lineItem) => {
          return <CartItem lineItem={lineItem} key={lineItem.product_id} />;
        })}
        <CartSummary lineItems={lineItems} />
        <CTA onClickFunction={() => router.push("/checkout")}>CHECKOUT</CTA>
      </Fragment>
    );
  };

  return (
    <Wrapper>
      {!lineItems.length ? (
        <Message>
          <p>Sorry, your cart is empty!</p>
        </Message>
      ) : (
        createCart(lineItems)
      )}
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

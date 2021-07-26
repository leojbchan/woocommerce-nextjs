import React from "react";
import styled from "styled-components";

interface Props {
  decrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
  quantity: number;
  incrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const CartQty = (props: Props) => {
  return (
    <Wrapper>
      <button onClick={props.decrementFunction}>-</button>
      <p>{props.quantity}</p>
      <button onClick={props.incrementFunction}>+</button>
    </Wrapper>
  );
};

export default CartQty;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 3px;
  }
`;

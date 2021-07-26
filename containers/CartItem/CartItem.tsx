import styled from "styled-components";
import { CartQty } from "../../components";
import { useAppDispatch } from "../../store/hooks";
import {
  decrementLineItemQuantity,
  addLineItem,
  removeLineItem,
} from "../../store/slices/cartSlice";
import { LineItem } from "../../utils/types/wooCommerceTypes";

interface Props {
  lineItem: LineItem;
}

// TODO refactor to separate file
const calculatePrice = (quantity: number, price: string) => {
  const formattedPrice = parseFloat(price) * 100;
  const result = (formattedPrice * quantity) / 100;
  return result.toFixed(2);
};

const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();

  // copy lineItem object and set the quantity to 1 so only incrementing/decrementing by 1
  const data = { ...props.lineItem };
  data.quantity = 1;

  const increment = () => {
    dispatch(addLineItem(data));
  };

  const decrement = () => {
    dispatch(decrementLineItemQuantity(data));
  };

  const remove = () => {
    dispatch(removeLineItem(data));
  };

  return (
    <Wrapper>
      <div onClick={remove}>X</div>
      <div>{props.lineItem.name}</div>
      <CartQty
        quantity={props.lineItem.quantity}
        decrementFunction={decrement}
        incrementFunction={increment}
      />
      <div>
        £{calculatePrice(props.lineItem.quantity, props.lineItem.price!)}
      </div>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    :first-child {
      width: 10%;
    }

    :nth-child(2) {
      width: 40%;
      text-align: left;
    }

    :nth-child(3) {
      width: 25%;
      text-align: center;
    }

    :nth-child(4) {
      width: 25%;
      text-align: right;
    }

    /* :last-child {
      width: 25%;
      text-align: right;
    } */
  }
`;

const QtyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

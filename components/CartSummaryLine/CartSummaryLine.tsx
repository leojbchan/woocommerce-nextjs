import styled from "styled-components";

interface Props {
  title: string;
  price: string;
}

const CartSummaryLine = (props: Props) => {
  return (
    <Wrapper>
      <span>
        <strong>{props.title}</strong>
      </span>
      <span>
        <strong>{props.price}</strong>
      </span>
    </Wrapper>
  );
};

export default CartSummaryLine;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    :first-child {
      width: 75%;
      text-align: right;
    }
    :nth-child(2) {
      width: 25%;
      text-align: right;
    }
  }
`;

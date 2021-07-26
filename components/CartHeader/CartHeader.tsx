import styled from "styled-components";

const CartHeader = () => {
  return (
    <Wrapper>
      <h3 />
      <h3>Name</h3>
      <h3>Qty</h3>
      <h3>Total</h3>
    </Wrapper>
  );
};

export default CartHeader;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
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
  }
`;

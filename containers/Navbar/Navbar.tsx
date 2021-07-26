import styled from "styled-components";
import { NavHeading } from "../../components";

const Navbar = () => {
  return (
    <Wrapper>
      <NavHeading link="/">Menu</NavHeading>
      <NavHeading link="/cart">Cart</NavHeading>
      <NavHeading link="/checkout">Checkout</NavHeading>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

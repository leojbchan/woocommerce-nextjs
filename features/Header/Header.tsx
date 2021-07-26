import styled from "styled-components";
import { Heading } from "../../components";
import Navbar from "../../containers/Navbar/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Heading textAlign="center">The Candy Shop</Heading>
      <Navbar />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
`;

import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
}

const CTA = (props: Props) => {
  return (
    <Wrapper className={props.className} onClick={props.onClickFunction}>
      {props.children}
    </Wrapper>
  );
};

export default CTA;

const Wrapper = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.darkText};
`;

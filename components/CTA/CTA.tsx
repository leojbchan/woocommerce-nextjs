import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CTA = (props: Props) => {
  return (
    <StyledButton
      className={props.className}
      onClick={props.onClickFunction}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default CTA;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.darkText};
  &:disabled {
    opacity: 0.4;
    background: lightgrey;
  }
`;

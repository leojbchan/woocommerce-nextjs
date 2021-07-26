import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
  textAlign?: string;
  color?: string;
}

const Heading = (props: Props) => {
  return (
    <StyledH1
      className={props.className}
      textAlign={props?.textAlign}
      color={props?.color}
    >
      {props.children}
    </StyledH1>
  );
};

export default Heading;

// NOTE: can use type <Props> but <Pick> is more specific
const StyledH1 = styled.h1<Pick<Props, "textAlign" | "color">>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  margin-bottom: 0;
`;

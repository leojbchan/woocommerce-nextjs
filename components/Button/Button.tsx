import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightText};
  padding: 10px 20px;
`;

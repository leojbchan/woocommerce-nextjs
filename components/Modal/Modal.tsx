import styled from "styled-components";

interface Props {
  message: string;
}

const Modal = (props: Props) => {
  return (
    <Wrapper>
      <h2>{props.message}</h2>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

import * as React from "react";
import styled from "styled-components";

const Container = styled.div``;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.16);
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

interface IModalTemplate {
  children: React.ReactNode;
  isVisible: boolean;
  modalVisibleHandler: () => void;
}

export const ModalTemplate = ({
  children,
  isVisible,
  modalVisibleHandler,
}: IModalTemplate) => {
  return (
    <Container>
      {isVisible && (
        <>
          <ModalOverlay onClick={modalVisibleHandler} />
          <Modal>{children}</Modal>
        </>
      )}
    </Container>
  );
};

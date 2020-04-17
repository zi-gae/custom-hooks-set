import React, { useEffect, useState } from "react";
import { IAlertModal } from "../../Molecules/AlertModal/types";
import styled from "styled-components";
import { IModalHandler } from "./types";

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

const ModalTemplateViewer = ({ children, isVisible, modalVisibleHandler }) => {
  const [position, setPosition] = useState(document.body.style.position);
  useEffect(() => {
    if (isVisible) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = position;
    }
  }, [isVisible]);
  return (
    <Container>
      {isVisible && (
        <>
          <ModalOverlay onClick={handleModalStatusToggle} />
          <Modal>{children}</Modal>
        </>
      )}
    </Container>
  );
};

export default ModalTemplateViewer;

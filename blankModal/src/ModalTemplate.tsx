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
  z-index: 999;
`;
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  border-radius: ${(props: IModal) =>
    props.borderRadius ? props.borderRadius : "10px"};
  background-color: ${(props: IModal) =>
    props.bgColor ? props.bgColor : "#ffffff"};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 1000;
`;

interface IModal {
  bgColor?: string;
  borderRadius?: string;
}

interface IModalTemplate extends IModal {
  children: React.ReactNode;
  isVisible: boolean;
  handleModalInactive?: () => void;
}

export const ModalTemplate = ({
  children,
  isVisible,
  handleModalInactive,
  bgColor,
  borderRadius,
}: IModalTemplate) => {
  return (
    <Container>
      {isVisible && (
        <>
          <ModalOverlay onClick={handleModalInactive} />
          <Modal bgColor={bgColor} borderRadius={borderRadius}>
            {children}
          </Modal>
        </>
      )}
    </Container>
  );
};

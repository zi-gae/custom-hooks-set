import React from "react";
import { ModalTemplate, useModalHandler } from "@devgw/blank-modal";

const ModalParent = () => {
  const {
    isVisible,
    handleModalActive,
    handleModalInactive,
  } = useModalHandler();
  return (
    <>
      <ModalTemplate
        isVisible={isVisible}
        handleModalInactive={handleModalInactive}
        bgColor="#e6e6e6"
        borderRaidus="5px"
      >
        <div>HELLOW</div>
        <button onClick={handleModalInactive}></button>
      </ModalTemplate>
      <button onClick={handleModalActive}>MODAL OPEN</button>
    </>
  );
};

export default ModalParent;

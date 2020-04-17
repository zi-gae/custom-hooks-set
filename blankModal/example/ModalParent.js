import React from "react";
import { ModalTemplate, useModalHandler } from "../lib";

const ModalParent = () => {
  const { isVisible, toggleModalStatus } = useModalHandler();
  return (
    <ModalTemplate isVisible={isVisible} toggleModalStatus={toggleModalStatus}>
      <div>HELLOW</div>
      <button onClick={toggleModalStatus}></button>
    </ModalTemplate>
  );
};

export default ModalParent;

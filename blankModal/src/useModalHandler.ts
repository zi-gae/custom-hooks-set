import * as React from "react";

export const useModalHandler = () => {
  const { useState } = React;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [overflowY, setoverflowY] = useState<string>(
    document.body.style.overflowY
  );

  const toggleModalStatus = () => {
    if (!isVisible) {
      setIsVisible(true);
      document.body.style.overflowY = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.position = overflowY;
    }
  };
  return {
    isVisible,
    toggleModalStatus,
  };
};

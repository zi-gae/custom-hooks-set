import * as React from "react";

export const useModalHandler = () => {
  const { useState } = React;

  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [position, setPosition] = useState<string>(
    document.body.style.position
  );

  const toggleModalStatus = () => {
    if (!isVisible) {
      setIsVisible(true);
      document.body.style.position = "fixed";
    } else {
      setIsVisible(false);
      document.body.style.position = position;
    }
  };
  return {
    isVisible,
    toggleModalStatus,
  };
};

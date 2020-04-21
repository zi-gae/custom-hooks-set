import * as React from "react";

export const useModalHandler = () => {
  const { useState } = React;

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [overflowY, setoverflowY] = useState<string>(
    document.body.style.overflowY
  );

  const handleModalActive = () => {
    if (!isVisible) {
      setIsVisible(true);
      document.body.style.overflowY = "hidden";
    }
  };

  const handleModalInactive = () => {
    if (isVisible) {
      setIsVisible(false);
      document.body.style.overflowY = overflowY;
    }
  };

  return {
    isVisible,
    handleModalActive,
    handleModalInactive,
  };
};

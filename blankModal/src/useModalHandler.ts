import * as React from "react";

export const useModalHandler = () => {
  const { useState } = React;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [overflowY, setoverflowY] = useState<string>(
    document.body.style.overflowY
  );
  const [overflowX, setoverflowX] = useState<string>(
    document.body.style.overflowX
  );

  const currentScrollOptions = {
    overflowX,
    overflowY,
  };

  const scrollLockOptions = {
    overflowX: "hidden",
    overflowY: "hidden",
  };

  const handleBodyScroll = (scrollOptions: {
    overflowX: string;
    overflowY: string;
  }) => {
    document.body.style.overflowX = scrollOptions.overflowX;
    document.body.style.overflowY = scrollOptions.overflowY;
  };

  const handleModalActive = () => {
    if (!isVisible) {
      setIsVisible(true);
      handleBodyScroll(scrollLockOptions);
    }
  };

  const handleModalInactive = () => {
    if (isVisible) {
      setIsVisible(false);
      handleBodyScroll(currentScrollOptions);
    }
  };

  return {
    isVisible,
    handleModalActive,
    handleModalInactive,
  };
};

import { useState, useRef, useEffect } from "react";

const useOutsideClickHandler = <T extends boolean>(initialRef: T) => {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(
    initialRef
  );
  const ref = useRef<any>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
    if (ref.current.contains(event.target) && !isComponentVisible) {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
};

export default useOutsideClickHandler;

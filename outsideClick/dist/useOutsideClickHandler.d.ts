/// <reference types="react" />
declare const useOutsideClickHandler: <T extends boolean>(initialRef: T) => {
    ref: import("react").MutableRefObject<any>;
    isComponentVisible: boolean;
    setIsComponentVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useOutsideClickHandler;

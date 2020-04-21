import * as React from "react";
interface IModalTemplate {
    children: React.ReactNode;
    isVisible: boolean;
    handleModalInactive?: () => void;
}
export declare const ModalTemplate: ({ children, isVisible, handleModalInactive, }: IModalTemplate) => JSX.Element;
export {};

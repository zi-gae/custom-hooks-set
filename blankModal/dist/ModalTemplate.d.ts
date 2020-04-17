import * as React from "react";
interface IModalTemplate {
    children: React.ReactNode;
    isVisible: boolean;
    modalVisibleHandler: () => void;
}
export declare const ModalTemplate: ({ children, isVisible, modalVisibleHandler, }: IModalTemplate) => JSX.Element;
export {};

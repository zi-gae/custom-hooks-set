import * as React from "react";
interface IModal {
    bgColor?: string;
    borderRadius?: string;
}
interface IModalTemplate extends IModal {
    children: React.ReactNode;
    isVisible: boolean;
    handleModalInactive?: () => void;
}
export declare const ModalTemplate: ({ children, isVisible, handleModalInactive, bgColor, borderRadius, }: IModalTemplate) => JSX.Element;
export {};

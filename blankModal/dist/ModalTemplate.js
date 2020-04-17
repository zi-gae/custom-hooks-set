"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var ModalOverlay = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.16);\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.16);\n"])));
var Modal = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n"], ["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: auto;\n  border-radius: 10px;\n  background-color: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n"])));
exports.ModalTemplate = function (_a) {
    var children = _a.children, isVisible = _a.isVisible, modalVisibleHandler = _a.modalVisibleHandler;
    return (React.createElement(Container, null, isVisible && (React.createElement(React.Fragment, null,
        React.createElement(ModalOverlay, { onClick: modalVisibleHandler }),
        React.createElement(Modal, null, children)))));
};
var templateObject_1, templateObject_2, templateObject_3;

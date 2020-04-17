"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.useModalHandler = function () {
    var useState = React.useState;
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = useState(document.body.style.position), position = _b[0], setPosition = _b[1];
    var toggleModalStatus = function () {
        if (!isVisible) {
            setIsVisible(true);
            document.body.style.position = "fixed";
        }
        else {
            setIsVisible(false);
            document.body.style.position = position;
        }
    };
    return {
        isVisible: isVisible,
        toggleModalStatus: toggleModalStatus,
    };
};

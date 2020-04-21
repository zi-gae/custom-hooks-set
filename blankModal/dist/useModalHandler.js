"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.useModalHandler = function () {
    var useState = React.useState;
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = useState(document.body.style.overflowY), overflowY = _b[0], setoverflowY = _b[1];
    var handleModalActive = function () {
        if (!isVisible) {
            setIsVisible(true);
            document.body.style.overflowY = "hidden";
        }
    };
    var handleModalInactive = function () {
        if (isVisible) {
            setIsVisible(false);
            document.body.style.overflowY = overflowY;
        }
    };
    return {
        isVisible: isVisible,
        handleModalActive: handleModalActive,
        handleModalInactive: handleModalInactive,
    };
};

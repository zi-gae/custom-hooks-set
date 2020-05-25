"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.useModalHandler = function () {
    var useState = React.useState;
    var _a = useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = useState(document.body.style.overflowY), overflowY = _b[0], setoverflowY = _b[1];
    var _c = useState(document.body.style.overflowX), overflowX = _c[0], setoverflowX = _c[1];
    var currentScrollOptions = {
        overflowX: overflowX,
        overflowY: overflowY,
    };
    var scrollLockOptions = {
        overflowX: "hidden",
        overflowY: "hidden",
    };
    var handleBodyScroll = function (scrollOptions) {
        document.body.style.overflowX = scrollOptions.overflowX;
        document.body.style.overflowY = scrollOptions.overflowY;
    };
    var handleModalActive = function () {
        setIsVisible(true);
        handleBodyScroll(scrollLockOptions);
    };
    var handleModalInactive = function () {
        setIsVisible(false);
        handleBodyScroll(currentScrollOptions);
    };
    return {
        isVisible: isVisible,
        handleModalActive: handleModalActive,
        handleModalInactive: handleModalInactive,
    };
};

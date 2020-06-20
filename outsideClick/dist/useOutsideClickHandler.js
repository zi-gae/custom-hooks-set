"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useOutsideClickHandler = function (initialRef) {
    var _a = react_1.useState(initialRef), isComponentVisible = _a[0], setIsComponentVisible = _a[1];
    var ref = react_1.useRef(null);
    var handleHideDropdown = function (event) {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };
    var handleClickOutside = function (event) {
        if (!ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
        if (ref.current.contains(event.target) && !isComponentVisible) {
            setIsComponentVisible(true);
        }
    };
    react_1.useEffect(function () {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return function () {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return { ref: ref, isComponentVisible: isComponentVisible, setIsComponentVisible: setIsComponentVisible };
};
exports.default = useOutsideClickHandler;

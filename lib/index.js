"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var prop_types_1 = require("prop-types");
require("./index.css");
var CustomAccordion = function (props) {
    var children = props.children, accordionName = props.accordionName, customClassName = props.customClassName, icon = props.icon, iconStyle = props.iconStyle;
    var _a = react_1.useState(false), expand = _a[0], setExpand = _a[1];
    var accordionRef = react_1.useRef(null);
    return (react_1.default.createElement("div", { className: "accordion-parent" },
        react_1.default.createElement("section", { onClick: function () { return setExpand(function (prevState) { return !prevState; }); }, className: ("trigger-container " + (expand ? 'active-trigger' : '') + " " + customClassName).trim() },
            react_1.default.createElement("h3", null, accordionName),
            react_1.default.createElement("button", { type: "button" }, icon ? react_1.default.createElement("img", { src: icon, alt: "icon", style: iconStyle }) : (react_1.default.createElement("svg", { viewBox: "0 0 8 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { d: "M0.292892 1.70711C-0.0976318 1.31658 -0.0976318 0.683418 0.292892 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7.70711 6.29289C8.08568 6.67147 8.09893 7.28106 7.73715 7.67572L2.23715 13.6757C1.86396 14.0828 1.23139 14.1103 0.824274 13.7372C0.417155 13.364 0.389653 12.7314 0.762845 12.3243L5.61586 7.03008L0.292892 1.70711Z" }))))),
        react_1.default.createElement("section", { ref: accordionRef, className: ("accordion " + (expand ? 'active-accordion' : '')).trim(), style: {
                maxHeight: expand ?
                    accordionRef.current.scrollHeight + 40 + "px" :
                    '0px',
            } }, children)));
};
CustomAccordion.propTypes = {
    children: prop_types_1.oneOfType([prop_types_1.object, prop_types_1.array]).isRequired,
    accordionName: prop_types_1.string,
    customClassName: prop_types_1.string,
    icon: prop_types_1.string,
    iconStyle: prop_types_1.object,
};
CustomAccordion.defaultProps = {
    accordionName: '',
    customClassName: '',
    icon: '',
    iconStyle: {},
};
exports.default = CustomAccordion;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Column extends React.PureComponent {
    render() {
        const { center, middle, children, style, left, right, top, bottom, between, around, ...restProps } = this.props;
        const viewStyle = style || {};
        if (left) {
            viewStyle.alignItems = 'flex-start';
        }
        if (center) {
            viewStyle.alignItems = 'center';
        }
        if (right) {
            viewStyle.alignItems = 'flex-end';
        }
        if (top) {
            viewStyle.justifyContent = 'flex-start';
        }
        if (middle) {
            viewStyle.justifyContent = 'center';
        }
        if (bottom) {
            viewStyle.justifyContent = 'flex-end';
        }
        if (between) {
            viewStyle.justifyContent = 'space-between';
        }
        if (around) {
            viewStyle.justifyContent = 'space-around';
        }
        return (React.createElement(react_native_1.View, Object.assign({ style: viewStyle }, restProps), children));
    }
}
exports.default = Column;

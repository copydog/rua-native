"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Row extends React.PureComponent {
    render() {
        const { center, middle, children, style, left, right, top, bottom, between, around, ...restProps } = this.props;
        const viewStyle = style || {};
        viewStyle.flexDirection = 'row';
        if (left) {
            viewStyle.justifyContent = 'flex-start';
        }
        if (center) {
            viewStyle.justifyContent = 'center';
        }
        if (right) {
            viewStyle.justifyContent = 'flex-end';
        }
        if (top) {
            viewStyle.alignItems = 'flex-start';
        }
        if (middle) {
            viewStyle.alignItems = 'center';
        }
        if (bottom) {
            viewStyle.alignItems = 'flex-end';
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
exports.default = Row;

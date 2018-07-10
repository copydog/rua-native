"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class Center extends React.PureComponent {
    render() {
        const { children } = this.props;
        const viewStyle = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        };
        return (React.createElement(react_native_1.View, { style: viewStyle }, children));
    }
}
exports.default = Center;

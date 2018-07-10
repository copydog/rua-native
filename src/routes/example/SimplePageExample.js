"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const resources_1 = require("../../resources");
const rua_1 = require("../../components/rua");
class SimplePageExample extends React.Component {
    render() {
        return (React.createElement(rua_1.Center, null,
            React.createElement(react_native_1.Text, null, "This is a simple page"),
            React.createElement(react_native_1.Text, null, "\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u9875\u9762")));
    }
}
SimplePageExample.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'Simple Page',
};
exports.default = SimplePageExample;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const resources_1 = require("../../resources");
const rua_1 = require("../../components/rua");
class SimpleModalPageExample extends React.PureComponent {
    render() {
        return (React.createElement(rua_1.Center, null,
            React.createElement(react_native_1.Text, null, "Simple Modal Page"),
            React.createElement(react_native_1.Text, null, "\u7B80\u5355\u5F39\u7A97\u9875\u9762")));
    }
}
SimpleModalPageExample.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'Simple Modal Page',
};
exports.default = SimpleModalPageExample;

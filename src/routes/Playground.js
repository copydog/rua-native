"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const rua_ui_1 = require("rua-ui");
class Playground extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(rua_ui_1.Repeat, { count: 3 },
                React.createElement(react_native_1.Text, null, "hello"))));
    }
}
Playground.navigationOptions = {
    headerTitle: '',
};
exports.default = Playground;
const styles = react_native_1.StyleSheet.create({
    outer: {
        fontSize: 20,
    },
    inner: {
        color: 'red',
    },
});

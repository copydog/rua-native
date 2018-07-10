"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const antd_mobile_rn_1 = require("antd-mobile-rn");
const react_native_1 = require("react-native");
const { Item: ListItem } = antd_mobile_rn_1.List;
class UI extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, null,
            React.createElement(antd_mobile_rn_1.List, { renderHeader: 'Helpers' },
                React.createElement(ListItem, { arrow: 'horizontal' }, "Repeat"),
                React.createElement(ListItem, { arrow: 'horizontal' }, "Placeholder"))));
    }
}
UI.navigationOptions = {
    headerTitle: 'UI',
    tabBarLabel: 'UI',
};
exports.default = UI;

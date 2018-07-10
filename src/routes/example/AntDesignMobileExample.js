"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const resources_1 = require("../../resources");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
class AntDesignMobileExample extends React.PureComponent {
    render() {
        return (React.createElement(react_native_1.View, null));
    }
}
AntDesignMobileExample.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'AntDesignMobileExample',
    tabBarIcon({ focused, tintColor }) {
        return (React.createElement(MaterialCommunityIcons_1.default, { name: 'library-books', size: 22, color: focused ? tintColor : '#333' }));
    }
};
exports.default = AntDesignMobileExample;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const resources_1 = require("../resources");
const rua_1 = require("../components/rua");
class Home extends React.Component {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.ScrollView, { style: { flex: 1 } },
                React.createElement(rua_1.Row, { center: true },
                    React.createElement(react_native_1.Text, null, "Hello")))));
    }
}
Home.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'Rua.JS',
    tabBarLabel: 'Home',
    tabBarIcon(nav) {
        const { focused, tintColor } = nav;
        return (React.createElement(MaterialCommunityIcons_1.default, { name: 'react', size: 22, color: focused ? tintColor : '#333' }));
    },
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
exports.default = Home;

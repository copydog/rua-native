"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const antd_mobile_rn_1 = require("antd-mobile-rn");
const rua_1 = require("rua");
const MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
const resources_1 = require("../resources");
const { Item: ListItem } = antd_mobile_rn_1.List;
class Manual extends React.Component {
    handleGoTo(route) {
        return () => rua_1.actions.go.to(route);
    }
    render() {
        const goTo = this.handleGoTo;
        return (React.createElement(react_native_1.View, null,
            React.createElement(antd_mobile_rn_1.List, { renderHeader: 'Navigation / 路由' },
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('SimplePageExample') }, "Simple Page / \u7B80\u5355\u9875\u9762"),
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('SimpleModalPageExample') }, "Simple Modal Page / \u7B80\u5355\u5F39\u7A97\u9875\u9762")),
            React.createElement(antd_mobile_rn_1.List, { renderHeader: 'Rua.js' },
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('RuaJSExample') }, "Rua.js"),
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('RuaUIExample') }, "Rua UI")),
            React.createElement(antd_mobile_rn_1.List, { renderHeader: 'Third-party libraries / 第三方库' },
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('AntDesignMobileExample') }, "Ant Design Mobile"),
                React.createElement(ListItem, { arrow: 'horizontal', onClick: goTo('ReactNativeModalExample') }, "React Native Modal"))));
    }
}
Manual.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'Manual',
    tabBarIcon({ focused, tintColor }) {
        return (React.createElement(MaterialCommunityIcons_1.default, { name: 'library-books', size: 22, color: focused ? tintColor : '#333' }));
    }
};
exports.default = Manual;

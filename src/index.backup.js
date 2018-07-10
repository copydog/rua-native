"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
require("./rua-native/loader");
const react_navigation_1 = require("react-navigation");
const routes_1 = require("./routes");
const example_1 = require("./routes/example");
const react_native_1 = require("react-native");
const Main = react_navigation_1.createBottomTabNavigator({
    Home: { screen: routes_1.Home, path: '/' },
    Manual: { screen: routes_1.Manual, path: '/manual' },
    Icon: { screen: routes_1.Icons, path: '/icon' },
});
Main.navigationOptions = ({ navigation }) => {
    const component = Main.router.getComponentForState(navigation.state);
    if (typeof component.navigationOptions === 'function') {
        return component.navigationOptions({ navigation });
    }
    return component.navigationOptions;
};
const App = react_navigation_1.createStackNavigator({
    MainNavigator: { screen: Main },
    SimplePageExample: { screen: example_1.SimplePageExample, path: '/manual/simplePage' },
});
react_native_1.AppRegistry.registerComponent('RuaNative', () => App);
if ('web' === react_native_1.Platform.OS) {
    ReactDom.render(React.createElement(App, { uriPrefix: 'http://localhost:8000/' }), document.getElementById('RuaNative'));
}

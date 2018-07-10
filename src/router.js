"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_navigation_1 = require("react-navigation");
const react_navigation_redux_helpers_1 = require("react-navigation-redux-helpers");
const rua_1 = require("rua");
const R = require("./resources");
const configs_1 = require("./configs");
const HomeNavigator = react_navigation_1.createBottomTabNavigator(configs_1.screens.home, {
    swipeEnabled: false,
    animationEnabled: false,
    // lazyLoad: true,
    tabBarOptions: {
        activeTintColor: R.color.primary,
        inactiveBackgroundColor: '#fff',
        activeBackgroundColor: '#fff',
        tabStyle: {
            height: 55,
            marginTop: -5,
            borderTopColor: '#f6f6f6',
            borderTopWidth: 1,
        },
    },
    initialRouteName: 'Home',
});
// BottomTabNavigator walk around
// 临时修复BottomTabNavigator
HomeNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
        headerTitle: routeName,
    };
};
const MainNavigator = react_navigation_1.createStackNavigator({
    HomeNavigator: { screen: HomeNavigator },
    ...configs_1.screens.main,
}, {
    headerMode: 'float',
});
MainNavigator.navigationOptions = {
    header: null,
};
const AppNavigator = react_navigation_1.createStackNavigator({
    MainNavigator: { screen: MainNavigator },
    ...configs_1.screens.app,
}, {
    // headerMode: 'float',
    mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: react_native_1.Easing.out(react_native_1.Easing.poly(4)),
            timing: react_native_1.Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return { opacity, transform: [{ translateY }] };
        },
    }),
});
// Get router state for 'router' model
// 获得'router'模型所需要的state
exports.routerReducer = react_navigation_redux_helpers_1.createNavigationReducer(AppNavigator);
exports.routerMiddleware = react_navigation_redux_helpers_1.createReactNavigationReduxMiddleware('root', (state) => state.router);
const App = react_navigation_redux_helpers_1.reduxifyNavigator(AppNavigator, 'root');
function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
}
// 终极路由
class Router extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.backHandle = () => {
            const currentScreen = getActiveRouteName(this.props.router);
            if (currentScreen === 'Login') {
                return true;
            }
            if (currentScreen !== 'Home') {
                this.props.dispatch(react_navigation_1.NavigationActions.back());
                return true;
            }
            return false;
        };
    }
    componentWillMount() {
        react_native_1.BackHandler.addEventListener('hardwareBackPress', this.backHandle);
    }
    componentWillUnmount() {
        react_native_1.BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
    }
    render() {
        const { app, dispatch, router } = this.props;
        // if (app.loading) return <Loading />
        return React.createElement(App, { dispatch: dispatch, state: router });
    }
}
// Decorator will cost more performance, use higher-order function here instead
// 装饰器会有更高的性能损耗，于是在这里直接使用高阶段函数
exports.default = rua_1.connect(({ app, router }) => ({ app, router }))(Router);

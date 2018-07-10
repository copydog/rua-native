"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./rua-native/loader");
// Basic
const React = require("react");
const react_native_1 = require("react-native");
// Configs
const models_1 = require("./rua-native/models");
const models_2 = require("./models");
const router_1 = require("./router");
// Rua.JS
const rua_1 = require("rua");
// todo: move
react_native_1.YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTJMessageModule requires main',
    'Module RCTWeChat requires main',
    'Module RCTImageLoader requires main',
]);
// 配置Rua
const app = new rua_1.Rua({
    dva: {
        initialState: {},
        models: [...models_1.default, ...models_2.default],
        extraReducers: { router: router_1.routerReducer },
        onAction: [router_1.routerMiddleware],
        onError(e) {
            console.warn('onError', e);
        },
    },
}).app;
// 启动
const App = app.start(React.createElement(router_1.default, null));
react_native_1.AppRegistry.registerComponent('RuaNative', () => App);
if ('web' === react_native_1.Platform.OS) {
    react_native_1.AppRegistry.runApplication('RuaNative', {
        rootTag: document.getElementById('RuaNative')
    });
}

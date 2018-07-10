"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----- Imports / 导入 -----
const routes_1 = require("../routes");
const example_1 = require("../routes/example");
// ----- Screens / 页面 -----
exports.home = {
    Home: { screen: routes_1.Home },
    Manual: { screen: routes_1.Manual },
    Icons: { screen: routes_1.Icons },
    Playground: { screen: routes_1.Playground },
};
exports.main = {
    SimplePageExample: { screen: example_1.SimplePageExample },
    AntDesignMobileExample: { screen: example_1.AntDesignMobileExample },
    ReactNativeModalExample: { screen: example_1.ReactNativeModalExample },
};
exports.drawer = {};
exports.app = {
    SimpleModalPageExample: { screen: example_1.SimpleModalPageExample }
};

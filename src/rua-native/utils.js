"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
exports.NavigationActions = react_navigation_1.NavigationActions;
exports.delay = (time) => new Promise(resolve => setTimeout(resolve, time));
exports.createAction = (type) => (payload) => ({ type, payload });

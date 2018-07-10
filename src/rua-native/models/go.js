"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const antd_mobile_rn_1 = require("antd-mobile-rn");
exports.default = {
    namespace: 'go',
    state: {
        history: [],
    },
    reducers: {},
    effects: {
        *back({ payload }, { call, put }) {
            // 跳转
            yield put(utils_1.NavigationActions.back());
        },
        *to({ payload: routeName }, { call, put }) {
            // 跳转
            yield put(utils_1.NavigationActions.navigate({ routeName }));
        },
        *toWith({ payload: routeName, ...params }, { call, put }) {
            yield put(utils_1.NavigationActions.navigate({
                routeName,
                params,
            }));
        },
        *toWithToast({ payload }, { call, put }) {
            // 获取toast配置数据
            const { toast: toastSetting = {} } = payload;
            // 获取具体的配置数据
            const { text: toastText = '努力加载中', time: toastDuration = 1, onClose: toastOnClose, mask: toastMask, } = toastSetting;
            // 跳转
            yield put({
                type: 'to',
                payload: payload.route,
            });
            // 调起toast
            antd_mobile_rn_1.Toast.loading(toastText, toastDuration, toastOnClose, toastMask);
        },
    },
};

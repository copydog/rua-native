"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rua_1 = require("rua");
exports.default = {
    namespace: 'modal',
    state: rua_1.emptyObject,
    reducers: {
        show(state, { payload: name }) {
            return { ...state, [name]: true };
        },
        hide(state, { payload: name }) {
            return { ...state, [name]: false };
        },
        hideAll(state, { payload: name }) {
            return rua_1.emptyObject;
        },
    },
    effects: rua_1.emptyObject,
};

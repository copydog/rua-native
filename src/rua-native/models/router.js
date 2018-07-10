"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const router_1 = require("../../router");
const actions = Object.values(utils_1.NavigationActions).filter(x => typeof x === 'string' && x.startsWith('Navigation/'));
const isPushAction = action => action.type === utils_1.NavigationActions.NAVIGATE ||
    action.type === utils_1.NavigationActions.PUSH;
exports.default = {
    namespace: 'router',
    state: {
        ...router_1.routerReducer(undefined),
    },
    reducers: {
        apply(state, { payload: action }) {
            return router_1.routerReducer(state, action);
        },
    },
    effects: {
        handlePush: [
            function* handlePush({ take, call, put }) {
                while (true) {
                    const { payload } = yield take('handlePush');
                    yield put({
                        type: 'apply',
                        payload,
                    });
                    // debounce, see https://github.com/react-community/react-navigation/issues/271
                    yield call(utils_1.delay, 500);
                }
            },
            { type: 'watcher' },
        ],
        watch: [
            function* watch({ take, put }) {
                while (true) {
                    const action = yield take(actions);
                    yield put({
                        type: isPushAction(action) ? 'handlePush' : 'apply',
                        payload: action,
                    });
                }
            },
            { type: 'watcher' },
        ],
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antd_mobile_rn_1 = require("antd-mobile-rn");
const React = require("react");
const react_native_1 = require("react-native");
const rua_ui_1 = require("rua-ui");
const resources_1 = require("../resources");
const icon_list_1 = require("../rua-native/icon-list");
const { Item: ListItem } = antd_mobile_rn_1.List;
const iconDict = {
    'material': icon_list_1.MaterialCommunityIcons,
};
const iconDictLen = {
    'material': icon_list_1.MaterialCommunityIcons.length,
};
class Icons extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentPage: 1,
            per_page: 30,
            font: 'material'
        };
        this.handleEndReached = () => {
            const { currentPage, per_page, font } = this.state;
            const len = iconDictLen[font];
            if (currentPage * per_page > len) {
                return;
            }
            this.setState((state) => {
                state.currentPage += 1;
                return state;
            });
        };
    }
    get data() {
        const { font, currentPage, per_page } = this.state;
        return iconDict[font].slice(0, per_page * currentPage);
    }
    keyExtractor(item) {
        return item;
    }
    renderItem({ item }) {
        return (React.createElement(ListItem, { thumb: React.createElement(rua_ui_1.Icon, { name: item, size: 22 }), key: item }, item));
    }
    render() {
        return (React.createElement(rua_ui_1.View, { style: styles.f1 },
            React.createElement(rua_ui_1.Space, null),
            React.createElement(rua_ui_1.View, null,
                React.createElement(react_native_1.ScrollView, { horizontal: true, style: styles.fontSelections, showsHorizontalScrollIndicator: false },
                    React.createElement(rua_ui_1.View, { style: styles.fontSelection },
                        React.createElement(rua_ui_1.Text, null, "Material")))),
            React.createElement(rua_ui_1.Space, null),
            React.createElement(react_native_1.FlatList, { style: styles.f1, data: this.data, renderItem: this.renderItem, keyExtractor: this.keyExtractor, onEndReached: this.handleEndReached, onEndReachedThreshold: 1.5 })));
    }
}
Icons.navigationOptions = {
    ...resources_1.default.style.header,
    headerTitle: 'Icons',
    tabBarLabel: 'Icons',
    tabBarIcon(nav) {
        const { focused, tintColor } = nav;
        return (React.createElement(rua_ui_1.Icon, { name: 'label', size: 22, color: focused ? tintColor : '#333' }));
    }
};
const styles = react_native_1.StyleSheet.create({
    f1: {
        flex: 1,
    },
    fontSelections: {
        backgroundColor: 'white',
    },
    fontSelection: {
        width: 100,
    },
});
exports.default = Icons;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const rua_1 = require("rua");
const react_native_elements_1 = require("react-native-elements");
const react_native_modal_1 = require("react-native-modal");
let ReactNativeModalExample = class ReactNativeModalExample extends React.PureComponent {
    renderSimpleModal() {
        const { simpleModal } = this.props;
        return (React.createElement(react_native_modal_1.default, { isVisible: simpleModal, onBackdropPress: this.handleHideAllModal },
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Text, null, "123"))));
    }
    handleHideAllModal() {
        rua_1.actions.modal.hideAll();
    }
    handleShowModal(name) {
        return () => rua_1.actions.modal.show(name);
    }
    render() {
        console.log(react_native_modal_1.default);
        console.log(react_native_elements_1.Button);
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Text, null, "ReactNativeModal"),
            React.createElement(react_native_elements_1.Button, { title: 'hi', onPress: this.handleShowModal('SimpleModal') }),
            this.renderSimpleModal()));
    }
};
ReactNativeModalExample = __decorate([
    rua_1.D.Connect(store => ({
        simpleModal: store.modal.simpleModal,
    }))
], ReactNativeModalExample);
exports.default = ReactNativeModalExample;

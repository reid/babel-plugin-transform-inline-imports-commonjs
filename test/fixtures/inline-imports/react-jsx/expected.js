"use strict";

var _react;

function _load_react() {
  return _react = _interopRequireDefault(require("react"));
}

var _button;

function _load_button() {
  return _button = _interopRequireDefault(require("button"));
}

var _label;

function _load_label() {
  return _label = _interopRequireDefault(require("label"));
}

var _groups;

function _load_groups() {
  return _groups = require("groups");
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(_react || _load_react()).default.createElement((_groups || _load_groups()).Group, null, (_react || _load_react()).default.createElement((_button || _load_button()).default, {
  prop: (_groups || _load_groups()).Group
}), (_react || _load_react()).default.createElement((_label || _load_label()).default.Big, null, foo()));
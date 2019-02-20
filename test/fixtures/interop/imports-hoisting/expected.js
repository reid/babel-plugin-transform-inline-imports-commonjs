"use strict";

var _taggedTemplateLiteral2;

function _load_taggedTemplateLiteral() {
  return _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
}

import _interopRequireDefault from "@babel/runtime/helpers/interopRequireDefault";

function _templateObject() {
  const data = (0, (_taggedTemplateLiteral2 || _load_taggedTemplateLiteral()).default)(["foo"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

tag(_templateObject());
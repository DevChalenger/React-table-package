"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledTableRow = _styledComponents.default.tr(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return "\n    &:hover{\n      background-color:".concat(theme.backgroundSecondary, ";\n      color:").concat(theme.contentSecondary, "\n    }\n    \n");
});

var TableBody = function TableBody(_ref2) {
  var dataTable = _ref2.dataTable,
      dataTitle = _ref2.dataTitle;
  return /*#__PURE__*/_react.default.createElement("tbody", {
    className: "table-body"
  }, dataTable.length !== 0 ? dataTable.map(function (valueData, keyData) {
    return /*#__PURE__*/_react.default.createElement(StyledTableRow, {
      key: keyData,
      className: "table-row"
    }, dataTitle.map(function (valueTitle, keyTitle) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: keyTitle,
        className: "table-data"
      }, /*#__PURE__*/_react.default.createElement("span", null, valueData[valueTitle]));
    }));
  }) : /*#__PURE__*/_react.default.createElement(StyledTableRow, {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data table-data-error",
    colSpan: dataTitle.length
  }, /*#__PURE__*/_react.default.createElement("span", null, "No data available in table"))));
};

var _default = TableBody;
exports.default = _default;
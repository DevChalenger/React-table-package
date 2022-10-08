"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var TableBody = function TableBody(_ref) {
  var dataTable = _ref.dataTable,
      dataTitle = _ref.dataTitle;
  return /*#__PURE__*/_react.default.createElement("tbody", {
    className: "table-body"
  }, dataTable.length !== 0 ? dataTable.map(function (valueData, keyData) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: keyData,
      className: "table-row"
    }, dataTitle.map(function (valueTitle, keyTitle) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: keyTitle,
        className: "table-data table-data-".concat(valueTitle)
      }, valueData[valueTitle]);
    }));
  }) : /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: "table-data table-data-error",
    colSpan: dataTitle.length
  }, "No data available in table")));
};

var _default = TableBody;
exports.default = _default;
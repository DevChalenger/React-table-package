"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledFooterList = _styledComponents.default.li(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)([""])));

var TableFooter = function TableFooter(_ref) {
  var entriesTable = _ref.entriesTable,
      totalData = _ref.totalData,
      paginate = _ref.paginate,
      currentTable = _ref.currentTable,
      rangeTable = _ref.rangeTable,
      currentData = _ref.currentData;

  var range = function range(start, end) {
    return (0, _toConsumableArray2.default)(Array(end).keys()).map(function (el) {
      return el + start;
    });
  };

  var dataCount = Math.ceil(totalData / entriesTable);
  var datas = range(1, dataCount);
  return datas.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "table-footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "current-entries"
  }, "Showing ", entriesTable * currentTable - entriesTable, " to", " ", currentData.length + entriesTable * currentTable - entriesTable, " of", " ", totalData, " datas"), /*#__PURE__*/_react.default.createElement("ul", null, currentTable === 1 ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-inherit"
  }, "Start")) : /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return paginate(1);
    }
  }, "Start")), currentTable === 1 ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-inherit"
  }, "Previous")) : /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return paginate(currentTable - 1);
    }
  }, "Previous")), currentTable - rangeTable >= 1 ? /*#__PURE__*/_react.default.createElement("li", null, "...") : "", datas.map(function (data) {
    return data > currentTable - rangeTable && data < currentTable + rangeTable ? /*#__PURE__*/_react.default.createElement(StyledFooterList, {
      key: data
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: function onClick() {
        return currentTable === data ? "" : paginate(data);
      },
      className: currentTable === data ? "current-page" : ""
    }, data)) : "";
  }), currentTable + rangeTable <= datas[datas.length - 1] ? /*#__PURE__*/_react.default.createElement("li", null, "...") : "", currentTable === datas[datas.length - 1] ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-inherit"
  }, "Next")) : /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return paginate(currentTable + 1);
    }
  }, "Next")), currentTable === datas[datas.length - 1] ? /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-inherit"
  }, "End")) : /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return paginate(datas[datas.length - 1]);
    }
  }, "End")))) : "";
};

var _default = TableFooter;
exports.default = _default;
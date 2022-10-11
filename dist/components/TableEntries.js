"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireDefault(require("react"));

var TableEntries = function TableEntries(_ref) {
  var setEntriesTable = _ref.setEntriesTable,
      paginate = _ref.paginate;
  var options = [{
    value: 10,
    name: 10
  }, {
    value: 25,
    name: 25
  }, {
    value: 50,
    name: 50
  }, {
    value: 100,
    name: 100
  }];

  var handleChange = function handleChange(e) {
    setEntriesTable(parseInt(e.target.value));
    paginate(1);
    console.log(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-entries"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "select-entries"
  }, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    name: "entries",
    id: "select-entries",
    className: "select-entries",
    onChange: handleChange
  }, options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: option.value,
      value: option.value
    }, option.name);
  })), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "select-entries"
  }, "entries"));
};

var _default = TableEntries;
exports.default = _default;
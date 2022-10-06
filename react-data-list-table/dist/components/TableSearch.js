"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireDefault(require("react"));

var TableSearch = function TableSearch(_ref) {
  var stateTable = _ref.stateTable,
      dataTitle = _ref.dataTitle,
      setStateTable = _ref.setStateTable,
      paginate = _ref.paginate,
      setSorted = _ref.setSorted;

  var handleChange = function handleChange(e) {
    var search = stateTable.filter(function (state) {
      return dataTitle.some(function (title) {
        return state[title].toLowerCase().includes(e.target.value.toLowerCase());
      });
    });
    paginate(1);
    setStateTable(search);
    setSorted({
      direction: null,
      name: null
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-search"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Search :"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "input-search",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }));
};

var _default = TableSearch;
exports.default = _default;
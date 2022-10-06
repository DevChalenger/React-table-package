"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _sortSolid = require("../assets/sort-solid.svg");

var _sortUpSolid = require("../assets/sort-up-solid.svg");

var _sortDownSolid = require("../assets/sort-down-solid.svg");

var _react = _interopRequireDefault(require("react"));

var TableHeader = function TableHeader(_ref) {
  var dataTitle = _ref.dataTitle,
      setStateTable = _ref.setStateTable,
      stateTable = _ref.stateTable,
      sorted = _ref.sorted,
      setSorted = _ref.setSorted;

  var sortAscending = function sortAscending(column) {
    var sortedData = (0, _toConsumableArray2.default)(stateTable).sort(function (a, b) {
      return a[column] < b[column] ? -1 : 1;
    });
    setStateTable(sortedData);
  };

  var sortDescending = function sortDescending(column) {
    var sortedData = (0, _toConsumableArray2.default)(stateTable).sort(function (a, b) {
      return a[column] < b[column] ? 1 : -1;
    });
    setStateTable(sortedData);
  };

  var sorting = function sorting(column) {
    if (sorted.direction === "desc" || sorted.direction === null || sorted.name !== column) {
      sortAscending(column);
      setSorted({
        direction: "asc",
        name: column
      });
    }

    if (sorted.direction === "asc" && sorted.name === column) {
      sortDescending(column);
      setSorted({
        direction: "desc",
        name: column
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement("thead", {
    className: "table-header"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, dataTitle.map(function (valueTitle, keyTitle) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: keyTitle,
      className: "table-title"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "table-title-container"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "table-title-text"
    }, valueTitle.charAt(0).toUpperCase() + valueTitle.slice(1).replace(/([A-Z])/g, " $1")), /*#__PURE__*/_react.default.createElement("button", {
      className: "table-title-button sort." + valueTitle,
      onClick: function onClick() {
        return sorting(valueTitle);
      }
    }, sorted.name === valueTitle ? sorted.direction === "asc" ? /*#__PURE__*/_react.default.createElement(_sortUpSolid.ReactComponent, {
      height: 15
    }) : /*#__PURE__*/_react.default.createElement(_sortDownSolid.ReactComponent, {
      height: 15
    }) : /*#__PURE__*/_react.default.createElement(_sortSolid.ReactComponent, {
      height: 15
    }))));
  })));
};

var _default = TableHeader;
exports.default = _default;
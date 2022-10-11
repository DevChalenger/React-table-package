"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _sortSolid = require("../assets/sort-solid.svg");

var _sortUpSolid = require("../assets/sort-up-solid.svg");

var _sortDownSolid = require("../assets/sort-down-solid.svg");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyedTableHeader = _styledComponents.default.thead(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return "\n    background-color:".concat(theme.backgroundSecondary, ";\n    color:").concat(theme.contentSecondary, ";\n    svg {\n      path {\n        fill: ").concat(theme.contentSecondary, ";\n      }\n    }\n  ");
});

var TableHeader = function TableHeader(_ref2) {
  var dataTitle = _ref2.dataTitle,
      setStateTable = _ref2.setStateTable,
      stateTable = _ref2.stateTable,
      sorted = _ref2.sorted,
      setSorted = _ref2.setSorted;

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

  return /*#__PURE__*/_react.default.createElement(StyedTableHeader, {
    className: "table-title-header"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: "table-row"
  }, dataTitle.map(function (valueTitle, keyTitle) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: keyTitle,
      className: "table-title"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "table-title-container",
      onClick: function onClick() {
        return sorting(valueTitle);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "table-title-text"
    }, valueTitle.charAt(0).toUpperCase() + valueTitle.slice(1).replace(/([A-Z])/g, " $1")), /*#__PURE__*/_react.default.createElement("div", {
      className: "table-title-button sort." + valueTitle
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
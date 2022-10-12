"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var propsHandler = function propsHandler(_ref, _ref2) {
  var dataTable = _ref.dataTable,
      dataTitle = _ref.dataTitle,
      tableTitle = _ref.tableTitle,
      rowsPerTable = _ref.rowsPerTable,
      range = _ref.range,
      selectEntries = _ref.selectEntries,
      backgroundThemePrimary = _ref.backgroundThemePrimary,
      contentThemePrimary = _ref.contentThemePrimary,
      backgroundThemeSecondary = _ref.backgroundThemeSecondary,
      contentThemeSecondary = _ref.contentThemeSecondary;
  var setStateTable = _ref2.setStateTable,
      setEntriesTable = _ref2.setEntriesTable,
      setRangeTable = _ref2.setRangeTable;
  var errorMessage = "Error: Failed Invalid prop type:"; // dataTable prop

  if (dataTable) {
    if (Array.isArray(dataTable)) {
      setStateTable(dataTable);
    }
  }

  console.log(backgroundThemePrimary); // rowsPerTable prop

  if (rowsPerTable) {
    if (rowsPerTable >= 100) {
      console.error("".concat(errorMessage, " \"rowsPerTable\" value must be lower or equal of 100"));
      setEntriesTable(10);
    } else {
      setEntriesTable(rowsPerTable);
    }
  }

  if (range) {
    if (range > 5) {
      console.error("".concat(errorMessage, " \"range\" value must be a greater than 5"));
    } else {
      setRangeTable(range);
    }
  }
};

var _default = propsHandler;
exports.default = _default;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("../styles/css/table.css");

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _TableFooter = _interopRequireDefault(require("./TableFooter"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableSearch = _interopRequireDefault(require("./TableSearch"));

var _TableEntries = _interopRequireDefault(require("./TableEntries"));

var _error = _interopRequireDefault(require("../utils/error.handler"));

//Import React
//Import Styles
//Import Components
var Table = function Table(_ref) {
  var dataTable = _ref.dataTable,
      dataTitle = _ref.dataTitle,
      tableTitle = _ref.tableTitle,
      rowsPerTable = _ref.rowsPerTable,
      range = _ref.range,
      selectEntries = _ref.selectEntries;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateTable = _useState2[0],
      setStateTable = _useState2[1];

  var _useState3 = (0, _react.useState)(2),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      rangeTable = _useState4[0],
      setRangeTable = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentTable = _useState6[0],
      setCurrentTable = _useState6[1];

  var _useState7 = (0, _react.useState)(10),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      entriesTable = _useState8[0],
      setEntriesTable = _useState8[1];

  var _useState9 = (0, _react.useState)({
    direction: null,
    name: null
  }),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      sorted = _useState10[0],
      setSorted = _useState10[1];

  var indexOfLastPage = currentTable * entriesTable;
  var indexOfFirstPage = indexOfLastPage - entriesTable;
  var currentData = stateTable.slice(indexOfFirstPage, indexOfLastPage);

  var paginate = function paginate(pageNumber) {
    return setCurrentTable(pageNumber);
  };

  (0, _react.useEffect)(function () {
    if (rowsPerTable) {
      if (rowsPerTable > 100) {
        console.error("The numeric value per table is too high the value must be lower or equal of 100");
        setEntriesTable(12);
      } else if (typeof rowsPerTable !== "number") {
        console.error("The numeric value per table must be a number");
        setEntriesTable(12);
      } else {
        setEntriesTable(rowsPerTable);
      }
    }

    if (range) {
      if (range > 5) {
        console.error("The numeric value of sibling must be lower or equal of 5");
      } else if (typeof range !== "number") {
        console.error("The numeric value of sibling must be a number");
      } else {
        setRangeTable(range);
      }
    }

    (0, _error.default)({
      dataTable: dataTable,
      dataTitle: dataTitle,
      tableTitle: tableTitle,
      rowsPerTable: rowsPerTable,
      range: range,
      selectEntries: selectEntries
    });
    setStateTable(dataTable);
  }, [dataTable, dataTitle, tableTitle, rowsPerTable, range, selectEntries]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-header"
  }, tableTitle ? /*#__PURE__*/_react.default.createElement("h1", {
    className: "table-caption"
  }, tableTitle) : "", selectEntries ? /*#__PURE__*/_react.default.createElement(_TableEntries.default, {
    setEntriesTable: setEntriesTable,
    paginate: paginate
  }) : "", /*#__PURE__*/_react.default.createElement(_TableSearch.default, {
    stateTable: dataTable,
    dataTitle: dataTitle,
    setStateTable: setStateTable,
    paginate: paginate,
    setSorted: setSorted
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("table", {
    className: "table-section"
  }, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    dataTitle: dataTitle,
    stateTable: stateTable,
    setStateTable: setStateTable,
    sorted: sorted,
    setSorted: setSorted
  }), /*#__PURE__*/_react.default.createElement(_TableBody.default, {
    dataTitle: dataTitle,
    dataTable: currentData
  }))), /*#__PURE__*/_react.default.createElement(_TableFooter.default, {
    entriesTable: entriesTable,
    totalData: stateTable.length,
    currentTable: currentTable,
    currentData: currentData,
    paginate: paginate,
    rangeTable: rangeTable
  }));
};

var _default = Table;
exports.default = _default;
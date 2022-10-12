"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

require("../styles/css/table.css");

var _TableBody = _interopRequireDefault(require("./TableBody"));

var _TableFooter = _interopRequireDefault(require("./TableFooter"));

var _TableHeader = _interopRequireDefault(require("./TableHeader"));

var _TableSearch = _interopRequireDefault(require("./TableSearch"));

var _TableEntries = _interopRequireDefault(require("./TableEntries"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _props = _interopRequireDefault(require("../utils/props.handler"));

var _templateObject, _templateObject2, _templateObject3;

var TableContainer = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)([""])));

var StyledTableHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return "\n    background-color:".concat(theme.backgroundPrimary, ";\n    color:").concat(theme.contentPrimary, ";\n  ");
});

var StyledTableSection = _styledComponents.default.table(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return "\n    background-color:".concat(theme.backgroundPrimary, ";\n    color:").concat(theme.contentPrimary, ";\n");
});

var Table = function Table(_ref3) {
  var dataTable = _ref3.dataTable,
      dataTitle = _ref3.dataTitle,
      tableTitle = _ref3.tableTitle,
      rowsPerTable = _ref3.rowsPerTable,
      range = _ref3.range,
      selectEntries = _ref3.selectEntries,
      backgroundThemePrimary = _ref3.backgroundThemePrimary,
      contentThemePrimary = _ref3.contentThemePrimary,
      backgroundThemeSecondary = _ref3.backgroundThemeSecondary,
      contentThemeSecondary = _ref3.contentThemeSecondary;

  // State
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

  var _useState11 = (0, _react.useState)({
    backgroundPrimary: backgroundThemePrimary ? backgroundThemePrimary : "#fafafa",
    contentPrimary: contentThemePrimary ? contentThemePrimary : "black",
    backgroundSecondary: backgroundThemeSecondary ? backgroundThemeSecondary : "#7dc8dd",
    contentSecondary: contentThemeSecondary ? contentThemeSecondary : "white"
  }),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      theme = _useState12[0],
      setTheme = _useState12[1]; // Pagination


  var indexOfLastPage = currentTable * entriesTable;
  var indexOfFirstPage = indexOfLastPage - entriesTable;
  var currentData = stateTable.slice(indexOfFirstPage, indexOfLastPage);

  var paginate = function paginate(pageNumber) {
    return setCurrentTable(pageNumber);
  };

  (0, _react.useEffect)(function () {
    (0, _props.default)({
      dataTable: dataTable,
      dataTitle: dataTitle,
      tableTitle: tableTitle,
      rowsPerTable: rowsPerTable,
      range: range,
      selectEntries: selectEntries,
      backgroundThemePrimary: backgroundThemePrimary,
      contentThemePrimary: contentThemePrimary,
      backgroundThemeSecondary: backgroundThemeSecondary,
      contentThemeSecondary: contentThemeSecondary
    }, {
      setStateTable: setStateTable,
      setEntriesTable: setEntriesTable,
      setRangeTable: setRangeTable
    });
  }, [dataTable, dataTitle, tableTitle, rowsPerTable, range, selectEntries, backgroundThemeSecondary, contentThemeSecondary, backgroundThemePrimary, contentThemePrimary]);
  var backgroundPrimary = theme.backgroundPrimary,
      contentPrimary = theme.contentPrimary,
      backgroundSecondary = theme.backgroundSecondary,
      contentSecondary = theme.contentSecondary;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {
      backgroundPrimary: backgroundPrimary,
      contentPrimary: contentPrimary,
      backgroundSecondary: backgroundSecondary,
      contentSecondary: contentSecondary
    }
  }, /*#__PURE__*/_react.default.createElement(TableContainer, {
    className: "table-container"
  }, /*#__PURE__*/_react.default.createElement(StyledTableHeader, {
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
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(StyledTableSection, {
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
  })));
};

var _default = Table;
exports.default = _default;
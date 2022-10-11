// Import React
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// Import Styles
import "../styles/css/table.css";

// Import Components
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";
import TableEntries from "./TableEntries";

// Import PropTypes
import PropTypes from "prop-types";

// Import StyledComponent
import { ThemeProvider } from "styled-components";

// Import utils
import PropHandler from "../utils/props.handler";
import Theme from "../utils/theme.handler";

const Table = ({
  dataTable,
  dataTitle,
  tableTitle,
  rowsPerTable,
  range,
  selectEntries,
  backgroundTheme,
  contentTheme,
}) => {
  // State
  const [stateTable, setStateTable] = useState([]);
  const [rangeTable, setRangeTable] = useState(2);
  const [currentTable, setCurrentTable] = useState(1);
  const [entriesTable, setEntriesTable] = useState(10);
  const [sorted, setSorted] = useState({ direction: null, name: null });

  // Pagination
  const indexOfLastPage = currentTable * entriesTable;
  const indexOfFirstPage = indexOfLastPage - entriesTable;
  const currentData = stateTable.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentTable(pageNumber);

  useEffect(() => {
    PropHandler(
      {
        dataTable,
        dataTitle,
        tableTitle,
        rowsPerTable,
        range,
        selectEntries,
        backgroundTheme,
        contentTheme,
      },
      { setStateTable, setEntriesTable, setRangeTable }
    );
    Theme({ backgroundTheme, contentTheme });
  }, [
    dataTable,
    dataTitle,
    tableTitle,
    rowsPerTable,
    range,
    selectEntries,
    backgroundTheme,
    contentTheme,
  ]);
  const { backgroundContent, textContent } = Theme();
  return (
    <ThemeProvider theme={{ backgroundContent, textContent }}>
      <div className="table-container">
        <div className="table-header">
          {tableTitle ? <h1 className="table-caption">{tableTitle}</h1> : ""}
          {selectEntries ? (
            <TableEntries
              setEntriesTable={setEntriesTable}
              paginate={paginate}
            />
          ) : (
            ""
          )}

          <TableSearch
            stateTable={dataTable}
            dataTitle={dataTitle}
            setStateTable={setStateTable}
            paginate={paginate}
            setSorted={setSorted}
          />
        </div>
        <div className="table-wrapper">
          <table className="table-section">
            <TableHeader
              dataTitle={dataTitle}
              stateTable={stateTable}
              setStateTable={setStateTable}
              sorted={sorted}
              setSorted={setSorted}
            />
            <TableBody dataTitle={dataTitle} dataTable={currentData} />
          </table>
        </div>
        <TableFooter
          entriesTable={entriesTable}
          totalData={stateTable.length}
          currentTable={currentTable}
          currentData={currentData}
          paginate={paginate}
          rangeTable={rangeTable}
        />
      </div>
    </ThemeProvider>
  );
};

Table.propTypes = {
  dataTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  tableTitle: PropTypes.string,
  rowsPerTable: PropTypes.number,
  range: PropTypes.number,
  selectEntries: PropTypes.bool,
  backgroundTheme: PropTypes.string,
  contentTheme: PropTypes.string,
};

export default Table;

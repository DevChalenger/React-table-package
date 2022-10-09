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

// Import PropHandler
import PropHandler from "../utils/props.handler";

const Table = ({
  dataTable,
  dataTitle,
  tableTitle,
  rowsPerTable,
  range,
  selectEntries,
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
    if (rowsPerTable) {
      if (rowsPerTable > 100) {
        console.error(
          "The numeric value per table is too high the value must be lower or equal of 100"
        );
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
        console.error(
          "The numeric value of sibling must be lower or equal of 5"
        );
      } else if (typeof range !== "number") {
        console.error("The numeric value of sibling must be a number");
      } else {
        setRangeTable(range);
      }
    }
    PropHandler({
      dataTable,
      dataTitle,
      tableTitle,
      rowsPerTable,
      range,
      selectEntries,
    });
    setStateTable(dataTable);
  }, [dataTable, dataTitle, tableTitle, rowsPerTable, range, selectEntries]);

  return (
    <div className="table-container">
      <div className="table-header">
        {tableTitle ? <h1 className="table-caption">{tableTitle}</h1> : ""}
        {selectEntries ? (
          <TableEntries setEntriesTable={setEntriesTable} paginate={paginate} />
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
  );
};

Table.propTypes = {
  dataTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  tableTitle: PropTypes.string,
  rowsPerTable: PropTypes.number,
  range: PropTypes.number,
  selectEntries: PropTypes.bool,
};

export default Table;

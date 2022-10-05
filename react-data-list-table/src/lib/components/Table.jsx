//Import React
import { useEffect } from "react";
import { useState } from "react";

//Import Styles
import "../styles/css/table.css";

//Import Components
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";

//Import PropTypes
import PropTypes from "prop-types";
import TableEntries from "./TableEntries";
import errorHandler from "../utils/error.handler";

const Table = ({
  dataTable,
  dataTitle,
  tableTitle,
  rowsPerTable,
  range,
  selectEntries,
}) => {
  const [stateTable, setStateTable] = useState([]);
  const [rangeTable, setRangeTable] = useState(2);
  const [currentTable, setCurrentTable] = useState(1);
  const [entriesTable, setEntriesTable] = useState(10);
  const [sorted, setSorted] = useState({ direction: null, name: null });

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
    errorHandler({
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
      {tableTitle ? <h1>{tableTitle}</h1> : ""}

      <div className="search-and-entries">
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
  tableTitle: PropTypes.string.isRequired,
  rowsPerTable: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
};

export default Table;

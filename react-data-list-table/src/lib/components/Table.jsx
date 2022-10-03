import { useEffect } from "react";
import { useState } from "react";
import "../styles/css/table.css";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import TableSearch from "./TableSearch";

const Table = ({ dataTable, dataTitle, tableTitle, rowsPerTable, range }) => {
  const [stateTable, setStateTable] = useState([]);
  const [rangeTable, setRangeTable] = useState(2);
  const [currentTable, setCurrentTable] = useState(1);
  const [dataPerTable, setDataPerTable] = useState(12);

  const indexOfLastPage = currentTable * dataPerTable;
  const indexOfFirstPage = indexOfLastPage - dataPerTable;
  const currentData = stateTable.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => setCurrentTable(pageNumber);

  useEffect(() => {
    if (rowsPerTable) {
      if (rowsPerTable > 20) {
        console.error(
          "The numeric value per table is too high the value must be lower or equal of 20"
        );
        setDataPerTable(12);
      } else if (typeof rowsPerTable !== "number") {
        console.error("The numeric value per table must be a number");
        setDataPerTable(12);
      } else {
        setDataPerTable(rowsPerTable);
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

    setStateTable(dataTable);
  }, [dataTable, rowsPerTable, range]);

  return (
    <div className="table-container">
      {tableTitle ? <h1>{tableTitle}</h1> : ""}
      <TableSearch
        stateTable={dataTable}
        dataTitle={dataTitle}
        setStateTable={setStateTable}
        paginate={paginate}
      />
      <table className="table-section">
        <TableHeader
          dataTitle={dataTitle}
          stateTable={stateTable}
          setStateTable={setStateTable}
        />
        <TableBody dataTitle={dataTitle} dataTable={currentData} />
      </table>
      <TableFooter
        dataPerTable={dataPerTable}
        totalData={stateTable.length}
        currentTable={currentTable}
        paginate={paginate}
        rangeTable={rangeTable}
      />
    </div>
  );
};

export default Table;

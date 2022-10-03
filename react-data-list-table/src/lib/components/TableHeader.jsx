import { ReactComponent as InititialSort } from "../assets/sort-solid.svg";
/* import { ReactComponent as UpSort } from "../assets/sort-up-solid.svg";
import { ReactComponent as DownSort } from "../assets/sort-down-solid.svg";
import { useState } from "react"; */

function TableHeader({ dataTitle, setStateTable, stateTable }) {
  const sorting = (column) => {
    const sortedTable = stateTable
      .slice()
      .sort((a, b) =>
        a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0
      );
    setStateTable(sortedTable);
    console.log(stateTable);
  };

  return (
    <thead className="table-header">
      <tr className="table-row">
        {dataTitle.map((valueTitle, keyTitle) => (
          <th key={keyTitle} className="table-title">
            <div className="table-title-container">
              <span className="table-title-text">
                {valueTitle.charAt(0).toUpperCase() +
                  valueTitle.slice(1).replace(/([A-Z])/g, " $1")}
              </span>
              <button
                className={"table-title-button sort." + valueTitle}
                onClick={() => sorting(valueTitle)}
              >
                <InititialSort height={15} />
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

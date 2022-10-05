import { ReactComponent as InititialSort } from "../assets/sort-solid.svg";
import PropTypes from "prop-types";
import { ReactComponent as UpSort } from "../assets/sort-up-solid.svg";
import { ReactComponent as DownSort } from "../assets/sort-down-solid.svg";

const TableHeader = ({
  dataTitle,
  setStateTable,
  stateTable,
  sorted,
  setSorted,
}) => {
  const sortAscending = (column) => {
    const sortedData = [...stateTable].sort((a, b) =>
      a[column] < b[column] ? -1 : 1
    );
    setStateTable(sortedData);
  };

  const sortDescending = (column) => {
    const sortedData = [...stateTable].sort((a, b) =>
      a[column] < b[column] ? 1 : -1
    );

    setStateTable(sortedData);
  };

  let sorting = (column) => {
    if (
      sorted.direction === "desc" ||
      sorted.direction === null ||
      sorted.name !== column
    ) {
      sortAscending(column);
      setSorted({ direction: "asc", name: column });
    }
    if (sorted.direction === "asc" && sorted.name === column) {
      sortDescending(column);
      setSorted({ direction: "desc", name: column });
    }
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
                {sorted.name === valueTitle ? (
                  sorted.direction === "asc" ? (
                    <UpSort height={15} />
                  ) : (
                    <DownSort height={15} />
                  )
                ) : (
                  <InititialSort height={15} />
                )}
              </button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  stateTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  setStateTable: PropTypes.func.isRequired,
};

export default TableHeader;

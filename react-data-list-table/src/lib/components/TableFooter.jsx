import PropTypes from "prop-types";

const TableFooter = ({
  entriesTable,
  totalData,
  paginate,
  currentTable,
  rangeTable,
  currentData,
}) => {
  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };
  const dataCount = Math.ceil(totalData / entriesTable);
  const datas = range(1, dataCount);

  return datas.length ? (
    <div className="table-footer">
      <div className="current-entries">
        Showing {entriesTable * currentTable - entriesTable} to{" "}
        {currentData.length + entriesTable * currentTable - entriesTable} of{" "}
        {totalData} datas
      </div>
      <ul>
        {currentTable === 1 ? (
          <li>
            <button className="button-inherit">Start</button>
          </li>
        ) : (
          <li>
            <button onClick={() => paginate(1)}>Start</button>
          </li>
        )}

        {currentTable === 1 ? (
          <li>
            <button className="button-inherit">Previous</button>
          </li>
        ) : (
          <li>
            <button onClick={() => paginate(currentTable - 1)}>Previous</button>
          </li>
        )}
        {currentTable - rangeTable >= 1 ? <li>...</li> : ""}
        {datas.map((data) =>
          data > currentTable - rangeTable &&
          data < currentTable + rangeTable ? (
            <li key={data}>
              <button
                onClick={() => (currentTable === data ? "" : paginate(data))}
                className={currentTable === data ? "current-page" : ""}
              >
                {data}
              </button>
            </li>
          ) : (
            ""
          )
        )}
        {currentTable + rangeTable <= datas[datas.length - 1] ? (
          <li>...</li>
        ) : (
          ""
        )}
        {currentTable === datas[datas.length - 1] ? (
          <li>
            <button className="button-inherit">Next</button>
          </li>
        ) : (
          <li>
            <button onClick={() => paginate(currentTable + 1)}>Next</button>
          </li>
        )}
        {currentTable === datas[datas.length - 1] ? (
          <li>
            <button className="button-inherit">End</button>
          </li>
        ) : (
          <li>
            <button onClick={() => paginate(datas[datas.length - 1])}>
              End
            </button>
          </li>
        )}
      </ul>
    </div>
  ) : (
    ""
  );
};

TableFooter.propTypes = {
  entriesTable: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  currentTable: PropTypes.number.isRequired,
  rangeTable: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default TableFooter;

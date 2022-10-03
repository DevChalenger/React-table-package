function TableFooter({
  dataPerTable,
  totalData,
  paginate,
  currentTable,
  rangeTable,
}) {
  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };
  const dataCount = Math.ceil(totalData / dataPerTable);
  const datas = range(1, dataCount);
  console.log(datas);
  return datas.length ? (
    <div className="table-footer">
      <div>
        {currentTable} / {datas[datas.length - 1]}
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
}

export default TableFooter;

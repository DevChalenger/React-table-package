const errorHandler = (
  { dataTable, dataTitle, tableTitle, rowsPerTable, range, selectEntries },
  { setStateTable, setEntriesTable, setRangeTable }
) => {
  const errorMessage = "Error: Failed Invalid prop type:";

  // dataTable prop
  if (dataTable) {
    if (Array.isArray(dataTable)) {
      setStateTable(dataTable);
    }
    return;
  }

  // dataTitle prop
  if (dataTitle) {
    return;
  }

  // tableTitle prop
  if (tableTitle) {
    return;
  }

  // rowsPerTable prop
  if (rowsPerTable) {
    if (rowsPerTable >= 100) {
      console.error(
        `${errorMessage} "rowsPerTable" value must be lower or equal of 100`
      );
      setEntriesTable(10);
    } else {
      setEntriesTable(rowsPerTable);
    }
    return;
  }

  // range prop
  if (range) {
    if (range > 5) {
      console.error(`${errorMessage} "range" value must be a greater than 5`);
    } else {
      setRangeTable(range);
    }
    return;
  }
};

export default errorHandler;

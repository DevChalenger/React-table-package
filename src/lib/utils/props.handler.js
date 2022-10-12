const propsHandler = (
  {
    dataTable,
    dataTitle,
    tableTitle,
    rowsPerTable,
    range,
    selectEntries,
    backgroundThemePrimary,
    contentThemePrimary,
    backgroundThemeSecondary,
    contentThemeSecondary,
  },
  { setStateTable, setEntriesTable, setRangeTable, setTheme }
) => {
  const errorMessage = "Error: Failed Invalid prop type:";

  // dataTable prop
  if (dataTable) {
    if (Array.isArray(dataTable)) {
      setStateTable(dataTable);
    }
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
  }

  if (range) {
    if (range > 5) {
      console.error(`${errorMessage} "range" value must be a greater than 5`);
    } else {
      setRangeTable(range);
    }
  }
  setTheme({
    backgroundPrimary: backgroundThemePrimary
      ? backgroundThemePrimary
      : "#fafafa",
    contentPrimary: contentThemePrimary ? contentThemePrimary : "black",

    backgroundSecondary: backgroundThemeSecondary
      ? backgroundThemeSecondary
      : "#7dc8dd",
    contentSecondary: contentThemeSecondary ? contentThemeSecondary : "white",
  });
};

export default propsHandler;

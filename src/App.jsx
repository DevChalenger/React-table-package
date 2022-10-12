import { Table } from "./lib";
import data from "./data/MOCK_DATA.json";
const App = () => {
  const employeeData = data;
  const employeeTitle = Object.keys(employeeData[0]);

  const style = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    backgroundColor: "rgb(150,150,150)",
    padding: "10px",
  };
  return (
    <section style={style}>
      <Table
        dataTable={employeeData}
        dataTitle={employeeTitle}
        tableTitle={"Current Employees"}
        rowsPerTable={10}
        range={5}
        selectEntries
        backgroundThemePrimary={"#2b2b2b"}
        contentThemePrimary={"#d4d4d4"}
        backgroundThemeSecondary={"#d4d4d4"}
        contentThemeSecondary={"#2b2b2b"}
      />
    </section>
  );
};

export default App;

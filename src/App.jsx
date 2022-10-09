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
  };
  return (
    <section style={style}>
      <Table
        dataTable={employeeData}
        dataTitle={employeeTitle}
        tableTitle={"Current Employees"}
        rowsPerTable={10}
        background=""
        range={3}
        selectEntries
      />
    </section>
  );
};

export default App;

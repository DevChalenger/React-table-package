import { Table } from "./lib";
import data from "./data/MOCK_DATA.json";
const App = () => {
  const employeeData = data;
  const employeeTitle = Object.keys(employeeData[0]);

  const style = {
    borderRadius: "1em",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  };
  return (
    <div style={style}>
      <section>
        <Table
          dataTable={employeeData}
          dataTitle={employeeTitle}
          tableTitle={"Current Employees"}
          rowsPerTable={10}
          rang={3}
          selectEntries
        />
      </section>
    </div>
  );
};

export default App;

import { Table } from "./lib";
import data from "./data/MOCK_DATA.json";
const App = () => {
  const employeeData = data;
  const employeeTitle = Object.keys(employeeData[0]);

  const style = {
    borderRadius: "1em",
    overflow: "hidden",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    minWidth: "100%",
  };
  return (
    <div style={style}>
      <section>
        <Table
          dataTable={employeeData}
          dataTitle={employeeTitle}
          tableTitle={"Current Employees"}
          rowsPerTable={10}
          range={3}
          selectEntries
        />
      </section>
    </div>
  );
};

export default App;

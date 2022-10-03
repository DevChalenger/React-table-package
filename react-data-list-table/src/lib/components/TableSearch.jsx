function TableSearch({ stateTable, dataTitle, setStateTable, paginate }) {
  const handleChange = (e) => {
    const search = stateTable.filter((state) =>
      dataTitle.some((title) =>
        state[title].toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    paginate(1);
    setStateTable(search);
  };

  return (
    <div>
      <input type="search" onChange={(e) => handleChange(e)} />
    </div>
  );
}

export default TableSearch;

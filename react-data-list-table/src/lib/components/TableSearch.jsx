import PropTypes from "prop-types";

const TableSearch = ({
  stateTable,
  dataTitle,
  setStateTable,
  paginate,
  setSorted,
}) => {
  const handleChange = (e) => {
    const search = stateTable.filter((state) =>
      dataTitle.some((title) =>
        state[title].toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    paginate(1);
    setStateTable(search);
    setSorted({ direction: null, name: null });
  };

  return (
    <div className="table-search">
      <span>Search :</span>
      <input
        type="text"
        className="input-search"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

TableSearch.propTypes = {
  stateTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  setStateTable: PropTypes.func.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default TableSearch;

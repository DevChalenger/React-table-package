import React from "react";
import PropTypes from "prop-types";

const TableEntries = ({ setEntriesTable, paginate }) => {
  const options = [
    { value: 10, name: 10 },
    { value: 25, name: 25 },
    { value: 50, name: 50 },
    { value: 100, name: 100 },
  ];

  const handleChange = (e) => {
    setEntriesTable(parseInt(e.target.value));
    paginate(1);
  };

  return (
    <div className="table-entries">
      <label htmlFor="select-entries">Show</label>
      <select
        name="entries"
        id="select-entries"
        className="select-entries"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <label htmlFor="select-entries">entries</label>
    </div>
  );
};

TableEntries.propTypes = {
  setEntriesTable: PropTypes.func.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default TableEntries;

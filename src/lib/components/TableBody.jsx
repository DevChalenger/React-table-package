import PropTypes from "prop-types";
import React from "react";

const TableBody = ({ dataTable, dataTitle }) => {
  return (
    <tbody className="table-body">
      {dataTable.length !== 0 ? (
        dataTable.map((valueData, keyData) => (
          <tr key={keyData} className="table-row">
            {dataTitle.map((valueTitle, keyTitle) => (
              <td
                key={keyTitle}
                className={`table-data`}
                id={`table-data-${valueTitle}`}
              >
                <span>{valueData[valueTitle]}</span>
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr className="table-row">
          <td
            className={`table-data table-data-error`}
            colSpan={dataTitle.length}
          >
            <span>No data available in table</span>
          </td>
        </tr>
      )}
    </tbody>
  );
};

TableBody.propTypes = {
  dataTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
};

export default TableBody;

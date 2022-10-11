import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledTableRow = styled.tr`
  ${({ theme }) => `
    &:hover{
      background-color:${theme.backgroundSecondary};
      color:${theme.contentSecondary}
    }
`};
`;

const TableBody = ({ dataTable, dataTitle }) => {
  return (
    <tbody className="table-body">
      {dataTable.length !== 0 ? (
        dataTable.map((valueData, keyData) => (
          <StyledTableRow key={keyData} className="table-row">
            {dataTitle.map((valueTitle, keyTitle) => (
              <td
                key={keyTitle}
                className={`table-data`}
                id={`table-data-${valueTitle}`}
              >
                <span>{valueData[valueTitle]}</span>
              </td>
            ))}
          </StyledTableRow>
        ))
      ) : (
        <StyledTableRow className="table-row">
          <td
            className={`table-data table-data-error`}
            colSpan={dataTitle.length}
          >
            <span>No data available in table</span>
          </td>
        </StyledTableRow>
      )}
    </tbody>
  );
};

TableBody.propTypes = {
  dataTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
};

export default TableBody;

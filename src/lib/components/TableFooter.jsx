import PropTypes from "prop-types";
import React from "react";

// Import StyledComponent
import styled from "styled-components";

const StyledFooterList = styled.li`
  ${({ theme }) => `
    color: ${theme.contentPrimary};
    background-color:${theme.backgroundPrimary};
  `};
  & .current-page {
    ${({ theme }) => `
      color: ${theme.contentSecondary} !important;
      background-color:${theme.backgroundSecondary} !important;
  `};
  }
`;

const StyledFooterCurrentEntries = styled.div`
  ${({ theme }) => `
    color: ${theme.contentSecondary};`}
`;

const TableFooter = ({
  entriesTable,
  totalData,
  paginate,
  currentTable,
  rangeTable,
  currentData,
}) => {
  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };
  const dataCount = Math.ceil(totalData / entriesTable);
  const datas = range(1, dataCount);

  return datas.length ? (
    <div className="table-footer">
      <StyledFooterCurrentEntries className="current-entries">
        <span>
          Showing {entriesTable * currentTable - entriesTable} to{" "}
          {currentData.length + entriesTable * currentTable - entriesTable} of{" "}
          {totalData} datas
        </span>
      </StyledFooterCurrentEntries>
      <ul>
        <StyledFooterList>
          <button
            className={`${currentTable === 1 ? "button-inherit" : ""} start`}
            onClick={currentTable !== 1 ? () => paginate(1) : () => {}}
          >
            Start
          </button>
        </StyledFooterList>

        <StyledFooterList>
          <button
            className={`${currentTable === 1 ? "button-inherit" : ""} previous`}
            onClick={
              currentTable !== 1 ? () => paginate(currentTable - 1) : () => {}
            }
          >
            Prev
          </button>
        </StyledFooterList>

        {currentTable - rangeTable >= 1 ? <li>...</li> : ""}
        {datas.map((data) =>
          data > currentTable - rangeTable &&
          data < currentTable + rangeTable ? (
            <StyledFooterList key={data}>
              <button
                onClick={() => (currentTable === data ? "" : paginate(data))}
                className={currentTable === data ? "current-page" : ""}
              >
                {data}
              </button>
            </StyledFooterList>
          ) : (
            ""
          )
        )}
        {currentTable + rangeTable <= datas[datas.length - 1] ? (
          <li>...</li>
        ) : (
          ""
        )}

        <StyledFooterList>
          <button
            className={`${
              currentTable === datas[datas.length - 1] ? "button-inherit" : ""
            } next`}
            onClick={
              currentTable !== datas[datas.length - 1]
                ? () => paginate(currentTable + 1)
                : () => {}
            }
          >
            Next
          </button>
        </StyledFooterList>

        <StyledFooterList>
          <button
            className={`${
              currentTable === datas[datas.length - 1] ? "button-inherit" : ""
            } end`}
            onClick={
              currentTable !== datas[datas.length - 1]
                ? () => paginate(datas[datas.length - 1])
                : () => {}
            }
          >
            End
          </button>
        </StyledFooterList>
      </ul>
    </div>
  ) : (
    ""
  );
};

TableFooter.propTypes = {
  entriesTable: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  currentTable: PropTypes.number.isRequired,
  rangeTable: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentData: PropTypes.array.isRequired,
};

export default TableFooter;

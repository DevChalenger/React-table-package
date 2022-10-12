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
        {currentTable === 1 ? (
          <StyledFooterList>
            <button className="button-inherit">Start</button>
          </StyledFooterList>
        ) : (
          <StyledFooterList>
            <button onClick={() => paginate(1)}>Start</button>
          </StyledFooterList>
        )}

        {currentTable === 1 ? (
          <StyledFooterList>
            <button className="button-inherit">Previous</button>
          </StyledFooterList>
        ) : (
          <StyledFooterList>
            <button onClick={() => paginate(currentTable - 1)}>Previous</button>
          </StyledFooterList>
        )}
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
        {currentTable === datas[datas.length - 1] ? (
          <StyledFooterList>
            <button className="button-inherit">Next</button>
          </StyledFooterList>
        ) : (
          <StyledFooterList>
            <button onClick={() => paginate(currentTable + 1)}>Next</button>
          </StyledFooterList>
        )}
        {currentTable === datas[datas.length - 1] ? (
          <StyledFooterList>
            <button className="button-inherit">End</button>
          </StyledFooterList>
        ) : (
          <StyledFooterList>
            <button onClick={() => paginate(datas[datas.length - 1])}>
              End
            </button>
          </StyledFooterList>
        )}
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

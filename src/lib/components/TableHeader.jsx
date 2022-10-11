import React from "react";

import PropTypes from "prop-types";

import { ReactComponent as InititialSort } from "../assets/sort-solid.svg";
import { ReactComponent as UpSort } from "../assets/sort-up-solid.svg";
import { ReactComponent as DownSort } from "../assets/sort-down-solid.svg";

import styled from "styled-components";

import Theme from "../utils/theme.handler";

const StyedTableHeader = styled.thead`
  background-color: ${({ theme }) => theme.backgroundContent};
`;

const StyledTableRow = styled.tr``;

const StyledTableTitle = styled.th``;

const TableHeader = ({
  dataTitle,
  setStateTable,
  stateTable,
  sorted,
  setSorted,
}) => {
  const sortAscending = (column) => {
    const sortedData = [...stateTable].sort((a, b) =>
      a[column] < b[column] ? -1 : 1
    );
    setStateTable(sortedData);
  };

  const sortDescending = (column) => {
    const sortedData = [...stateTable].sort((a, b) =>
      a[column] < b[column] ? 1 : -1
    );

    setStateTable(sortedData);
  };

  let sorting = (column) => {
    if (
      sorted.direction === "desc" ||
      sorted.direction === null ||
      sorted.name !== column
    ) {
      sortAscending(column);
      setSorted({ direction: "asc", name: column });
    }
    if (sorted.direction === "asc" && sorted.name === column) {
      sortDescending(column);
      setSorted({ direction: "desc", name: column });
    }
  };

  return (
    <StyedTableHeader className="table-title-header">
      <StyledTableRow className="table-row">
        {dataTitle.map((valueTitle, keyTitle) => (
          <StyledTableTitle key={keyTitle} className="table-title">
            <div
              className="table-title-container"
              onClick={() => sorting(valueTitle)}
            >
              <span className="table-title-text">
                {valueTitle.charAt(0).toUpperCase() +
                  valueTitle.slice(1).replace(/([A-Z])/g, " $1")}
              </span>
              <div className={"table-title-button sort." + valueTitle}>
                {sorted.name === valueTitle ? (
                  sorted.direction === "asc" ? (
                    <UpSort height={15} />
                  ) : (
                    <DownSort height={15} />
                  )
                ) : (
                  <InititialSort height={15} />
                )}
              </div>
            </div>
          </StyledTableTitle>
        ))}
      </StyledTableRow>
    </StyedTableHeader>
  );
};

TableHeader.propTypes = {
  stateTable: PropTypes.array.isRequired,
  dataTitle: PropTypes.array.isRequired,
  setStateTable: PropTypes.func.isRequired,
  sorted: PropTypes.object.isRequired,
  setSorted: PropTypes.func.isRequired,
};

export default TableHeader;

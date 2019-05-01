import React from 'react';
import styled from "styled-components";
import TableHeaderCell from "../../atoms/TableHeaderCell";

function TableHeaderRow({
  titles
}) {
  return(
    <TableHeaderRow.Container data-testid='tableHeaderRow'>
      {titles && renderTableHeaderCell()}
    </TableHeaderRow.Container>
  );

  function renderTableHeaderCell() {
    return titles.map(({
      name
    }) => (
      <TableHeaderCell key={name}>
        {name}
      </TableHeaderCell>
    ))
  }
}

TableHeaderRow.Container = styled.tr``;

export default TableHeaderRow;

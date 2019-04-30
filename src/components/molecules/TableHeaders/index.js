import React from 'react';
import styled from "styled-components";
import TableHeader from "../../atoms/TableHeader";

function TableHeaders({
  titles
}) {
  return(
    <TableHeaders.Container data-testid='tableHeaders'>
      {titles && renderTableHeader()}
    </TableHeaders.Container>
  );

  function renderTableHeader() {
    return titles.map(({
      name
    }) => (
      <TableHeader key={name}>
        {name}
      </TableHeader>
    ))
  }
}

TableHeaders.Container = styled.tr`
`;

export default TableHeaders;

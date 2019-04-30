import React from 'react';
import styled from "styled-components";
import TableRow from "../TableRow";

function TableContent({
  data,
  onChange
}) {
  return(
    <TableContent.Container data-testid='tableContent'>
      {data && renderTableContent()}
    </TableContent.Container>
  );

  function renderTableContent() {
    return data.map((item) => (
      <TableRow key={item} data={item}>
        {item}
      </TableRow>
    ))
  }
}

TableContent.Container = styled.tbody`

`;

export default TableContent;

import React from 'react';
import styled from "styled-components";
import TableBodyRow from "../TableBodyRow";

function TableBody({
  data
}) {
  return(
    <TableBody.Container data-testid='tableBody'>
      {data && data.list && renderTableBody()}
    </TableBody.Container>
  );

  function renderTableBody() {
    return data.list.map((item) => (
      <TableBodyRow key={item.dt} data={item}>
        {item}
      </TableBodyRow>
    ))
  }
}

TableBody.Container = styled.tbody``;

export default TableBody;

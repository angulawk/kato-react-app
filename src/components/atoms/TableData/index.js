import React from 'react';
import styled from "styled-components";

function TableData({
  children,
  onChange
}) {
  return(
    <TableData.Container onChange={handleOnChange} data-testid='tableData'>
      {children}
    </TableData.Container>
  );

  function handleOnChange() {
    onChange(children);
  }
}

TableData.Container = styled.td`
  border: 1px solid #66a0ff;
  padding: 15px 30px;
  font-family: sans-serif;
`;

export default TableData;

import React from 'react';
import styled from "styled-components";

function TableHeader({
  children
}) {
  return(
    <TableHeader.Container data-testid='tableHeader'>
      {children}
    </TableHeader.Container>
  );
}

TableHeader.Container = styled.th`
  border: 1px solid #FFFFFF;
  padding: 15px 30px;
  font-family: sans-serif;
  background-color: #66a0ff;
  color: #FFFFFF;
`;

export default TableHeader;

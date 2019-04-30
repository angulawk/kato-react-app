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

TableHeader.Container = styled.div`
  border: 1px solid #FFFFFF;
  padding: 10px 20px;
  font-family: sans-serif;
  background-color: #66a0ff;
  color: #FFFFFF;
`;

export default TableHeader;

import React from 'react';
import styled from "styled-components";

const TableCell = ({
  children
}) => (
  <TableCell.Container data-testid='tableCell'>
    {children}
  </TableCell.Container>
)

TableCell.Container = styled.td`
  border: 1px solid #66a0ff;
  padding: 15px 30px;
  font-family: sans-serif;
`;

export default TableCell;

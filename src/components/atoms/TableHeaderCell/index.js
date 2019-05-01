import React from 'react';
import styled from "styled-components";

const TableHeaderCell = ({
  children
}) => (
  <TableHeaderCell.Container data-testid='tableHeaderCell'>
    {children}
  </TableHeaderCell.Container>
)

TableHeaderCell.Container = styled.th`
  border: 1px solid #FFFFFF;
  padding: 15px 30px;
  font-family: sans-serif;
  background-color: #66a0ff;
  color: #FFFFFF;
`;

export default TableHeaderCell;

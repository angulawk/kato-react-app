import React from 'react';
import styled from "styled-components";
import TableCell from "../../atoms/TableCell";

const TableBodyRow = ({
  data
}) => (
  <TableBodyRow.Container data-testid='tableBodyRow'>
    <TableCell>
      {data.date}
    </TableCell>
    <TableCell>
      {data.humidity}
    </TableCell>
    <TableCell>
      {data.temp}
    </TableCell>
  </TableBodyRow.Container>
);

TableBodyRow.Container = styled.tr``;

export default TableBodyRow;

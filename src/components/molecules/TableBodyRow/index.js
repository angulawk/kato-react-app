import React from 'react';
import styled from "styled-components";
import TableCell from "../../atoms/TableCell";

const TableBodyRow = ({
  data
}) => (
  <TableBodyRow.Container data-testid='tableBodyRow'>
    <TableCell>
      {data.dt_txt}
    </TableCell>
    <TableCell>
      {data.main.humidity}
    </TableCell>
    <TableCell>
      {data.main.temp}
    </TableCell>
  </TableBodyRow.Container>
);

TableBodyRow.Container = styled.tr``;

export default TableBodyRow;

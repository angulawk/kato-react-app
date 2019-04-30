import React, { Fragment } from 'react';
import styled from "styled-components";
import TableData from "../../atoms/TableData";

function TableRow({
  data,
  onChange
}) {
  return(
    <TableRow.Container data-testid='tableRow'>
      {data && renderTableData()}
    </TableRow.Container>
  );

  function renderTableData() {
    return (
      <Fragment>
        <TableData onChange={onChange}>
          {data.date}
        </TableData>
        <TableData onChange={onChange}>
          {data.humidity}
        </TableData>
        <TableData onChange={onChange}>
          {data.temp}
        </TableData>
      </Fragment>
    )
  }
}

TableRow.Container = styled.tr`
`;

export default TableRow;

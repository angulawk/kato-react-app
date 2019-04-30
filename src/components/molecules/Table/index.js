import React from 'react';
import styled from "styled-components";
import TableHeaders from "../TableHeaders";
import TableContent from "../TableContent";

function Table({
  titles,
  data,
  onChange
}) {

  return(
    <Table.Container data-testid='table'>
      <TableHeaders titles={titles} />
      <TableContent data={data} onChange={onChange} />
    </Table.Container>
  );
}

Table.Container = styled.table`
  margin: 50px auto;
  min-width: 300px;
  width: 100%;
`;

export default Table;

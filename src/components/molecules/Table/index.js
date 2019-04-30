import React from 'react';
import styled from "styled-components";
import TableHeaders from "../TableHeaders";

function Table({
  titles
}) {

  return(
    <Table.Container data-testid='table'>
      <TableHeaders titles={titles} />
    </Table.Container>
  );
}

Table.Container = styled.div`
  margin: 50px auto;
  width: 200px;
`;

export default Table;

import React from 'react';
import styled from "styled-components";
import TableHeaderRow from "../TableHeaderRow";
import TableBody from "../TableBody";

const Table = ({
  titles,
  data
}) => (
  <Table.Container data-testid='table'>
    <Table.Header>
      <TableHeaderRow titles={titles} />
    </Table.Header>
    <TableBody data={data} />
  </Table.Container>
);

Table.Container = styled.table`
  margin: 100px auto;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
`;

Table.Header = styled.thead``;

export default Table;

import React from 'react';
import styled from "styled-components";
import TableHeaderRow from "../TableHeaderRow";
import TableBody from "../TableBody";

const Table = ({
  titles,
  data
}) =>
data && data.list ?
  (
    <Table.Container data-testid='table'>
      <Table.Header>
      <TableHeaderRow titles={titles} />
    </Table.Header>
      <TableBody data={data} />
    </Table.Container>
  ) :
  (
    <Table.EmptyRecordsContainer>
      There are no data to display yet. Please select a city.
    </Table.EmptyRecordsContainer>
  )

Table.Container = styled.table`
  margin: 100px auto;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
`;

Table.Header = styled.thead``;
Table.EmptyRecordsContainer = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #66a0ff;
  font-family: sans-serif;
  font-size: 14px;
  text-align: center;
  padding: 100px 0;
`;

export default Table;

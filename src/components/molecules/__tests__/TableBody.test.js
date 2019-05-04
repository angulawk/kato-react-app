import { render } from 'react-testing-library';
import TableBody from '../TableBody';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

jest.mock("../TableBodyRow", () => ({ data }) => (
  <tr
    data-testid="mockTableBodyRow"
    data={JSON.stringify(data)}
  />
));

function setup(props) {
  const defaultProps = {
    data: []
  }

  const utils = render(
    <table>
      <TableBody {...defaultProps} {...props} />
    </table>
  );

  const { getByTestId, getAllByTestId } = utils;
  const tableBody = getByTestId('tableBody');
  const tableBodyRow = getAllByTestId('mockTableBodyRow');

  return {
    ...utils,
    tableBody,
    tableBodyRow
  }
}

describe('Component - TableBody', () => {
  const data = {
    list: [
      {
        dt: 1487246400,
        date: "1/02",
        humidity: 10,
        temp: 3324
      },
      {
        dt: 1487257200,
        date: "3/03",
        humidity: 40,
        temp: 6543
      },
      {
        dt: 1487408400,
        date: "4/05",
        humidity: 90,
        temp: 7553
      }
    ]
  }

  test('Should render Table Body Row', () => {
    const { tableBodyRow } = setup({ data });

    expect(tableBodyRow).toBeTruthy();
  });

  test('Should render 3 Table Body Rows', () => {
    const { tableBodyRow } = setup({ data });

    expect(tableBodyRow.length).toEqual(3);
  });

  test('Should render correct data in Table Body Rows', () => {
    const { tableBodyRow } = setup({ data });
    const tableData = JSON.parse(tableBodyRow[0].getAttribute("data"));

    expect(tableData.date).toEqual(data.list[0].date);
    expect(tableData.humidity).toEqual(data.list[0].humidity);
    expect(tableData.temp).toEqual(data.list[0].temp);
  });
})

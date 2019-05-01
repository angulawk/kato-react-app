import { render } from 'react-testing-library';
import TableBodyRow from '../TableBodyRow';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    data: []
  }

  const utils = render(
    <table>
      <tbody>
        <TableBodyRow { ...defaultProps } {...props} />
      </tbody>
    </table>
  );

  const { getByTestId, getAllByTestId } = utils;
  const tableBodyRow = getByTestId('tableBodyRow');
  const tableCell = getAllByTestId('tableCell');

  return {
    ...utils,
    tableBodyRow,
    tableCell
  }
}

describe('Component - TableBodyRow', () => {
  const data = {
    dt: 1487246400,
    date: "1/02",
    humidity: 10,
    temp: 3324
  };

  test('Should render Table Cell', () => {
    const { tableCell } = setup({ data });

    expect(tableCell).toBeTruthy();
  });

  test('Should have correct text', () => {
    const { tableCell } = setup({ data });

    expect(tableCell[0].textContent).toEqual(data.date);
    expect(tableCell[1].textContent).toEqual(data.humidity.toString());
    expect(tableCell[2].textContent).toEqual(data.temp.toString());
  });

  test('Should display three Table Cells', () => {
    const { tableCell } = setup({ data });

    expect(tableCell.length).toEqual(3);
  });
})

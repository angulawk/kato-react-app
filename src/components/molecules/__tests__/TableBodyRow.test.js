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
    dt_txt: "2019-03-31 14:00:00",
    main: {
      humidity: 10,
      temp: 3324
    }
  };

  test('Should render Table Cell', () => {
    const { tableCell } = setup({ data });

    expect(tableCell).toBeTruthy();
  });

  test('Should have correct text', () => {
    const { tableCell } = setup({ data });

    expect(tableCell[0].textContent).toEqual(data.dt_txt);
    expect(tableCell[1].textContent).toEqual(data.main.humidity.toString());
    expect(tableCell[2].textContent).toEqual(data.main.temp.toString());
  });

  test('Should display three Table Cells', () => {
    const { tableCell } = setup({ data });

    expect(tableCell.length).toEqual(3);
  });
})

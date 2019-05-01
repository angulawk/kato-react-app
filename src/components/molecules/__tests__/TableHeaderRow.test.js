import { render } from 'react-testing-library';
import TableHeaderRow from '../TableHeaderRow';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    titles: []
  }

  const utils = render(
    <table>
      <thead>
        <TableHeaderRow {...defaultProps} {...props} />
      </thead>
    </table>
  );

  const { getByTestId, getAllByTestId } = utils;
  const tableHeaderRow = getByTestId('tableHeaderRow');
  const tableHeaderCell = getAllByTestId('tableHeaderCell');

  return {
    ...utils,
    tableHeaderRow,
    tableHeaderCell
  }
}

describe('Component - TableHeaderRow', () => {
  const titles = [
    {
      name: "Date"
    },
    {
      name: "Humidity"
    },
    {
      name: "Temp"
    }
  ];

  test('Should render Table Header Cell', () => {
    const { tableHeaderCell } = setup({ titles });

    expect(tableHeaderCell).toBeTruthy();
  });

  test('Should have correct titles', () => {
    const { tableHeaderCell } = setup({ titles });

    expect(tableHeaderCell[0].textContent).toEqual(titles[0].name);
    expect(tableHeaderCell[1].textContent).toEqual(titles[1].name);
    expect(tableHeaderCell[2].textContent).toEqual(titles[2].name);
  });

  test('Should display three Table HeaderCells', () => {
    const { tableHeaderCell } = setup({ titles });

    expect(tableHeaderCell.length).toEqual(3);
  });

})

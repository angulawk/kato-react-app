import { render } from 'react-testing-library';
import TableCell from '../TableCell';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const utils = render(
    <table>
      <tbody>
        <tr>
          <TableCell {...props}>
            Some data
          </TableCell>
        </tr>
      </tbody>
    </table>
  );

  const { getByTestId } = utils;
  const tableCell = getByTestId('tableCell');

  return {
    ...utils,
    tableCell
  }
}

describe('Component - TableCell', () => {
  let tableCell;

  beforeEach(() => {
    tableCell = setup().tableCell;
  });

  test('Should have correct border', () => {
    expect(tableCell).toHaveStyleRule('border', '1px solid #66a0ff');
  });

  test('Should have correct font padding', () => {
    expect(tableCell).toHaveStyleRule('padding', '15px 30px');
  });

  test('Should have correct font-family', () => {
    expect(tableCell).toHaveStyleRule('font-family', 'sans-serif');
  });

  test('Should have children', () => {
    expect(tableCell.textContent).toEqual("Some data");
  });
})

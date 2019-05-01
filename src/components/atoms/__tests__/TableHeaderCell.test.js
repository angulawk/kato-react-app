import { render } from 'react-testing-library';
import TableHeaderCell from '../TableHeaderCell';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const utils = render(
    <table>
      <thead>
        <tr>
          <TableHeaderCell {...props}>
            Some Header Cell Text
          </TableHeaderCell>
        </tr>
      </thead>
    </table>
  );

  const { getByTestId } = utils;
  const tableHeaderCell = getByTestId('tableHeaderCell');

  return {
    ...utils,
    tableHeaderCell
  }
}

describe('Component - TableHeaderCell', () => {
  let tableHeaderCell;

  beforeEach(() => {
    tableHeaderCell = setup().tableHeaderCell;
  });

  test('Should have correct border', () => {
    expect(tableHeaderCell).toHaveStyleRule('border', '1px solid #FFFFFF');
  });

  test('Should have correct font padding', () => {
    expect(tableHeaderCell).toHaveStyleRule('padding', '15px 30px');
  });

  test('Should have correct font-family', () => {
    expect(tableHeaderCell).toHaveStyleRule('font-family', 'sans-serif');
  });

  test('Should have correct background-color', () => {
    expect(tableHeaderCell).toHaveStyleRule('background-color', '#66a0ff');
  });

  test('Should have correct color', () => {
    expect(tableHeaderCell).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have children', () => {
    expect(tableHeaderCell.textContent).toEqual("Some Header Cell Text");
  });
})

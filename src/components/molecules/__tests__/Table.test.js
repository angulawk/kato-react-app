import { render } from 'react-testing-library';
import Table from '../Table';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

jest.mock("../TableHeaderRow", () => ({ titles }) => (
  <tr
    data-testid="mockTableHeaderRow"
    titles={JSON.stringify(titles)}
  />
));

jest.mock("../TableBody", () => ({ data }) => (
  <tbody
    data-testid="mockTableBody"
    data={JSON.stringify(data)}
  />
));

function setup(props) {
  const defaultProps = {
    titles: [],
    data: []
  }

  const utils = render(
    <Table {...defaultProps} {...props} />
  );

  const { getByTestId } = utils;
  const table = getByTestId('table');
  const tableHeaderRow = getByTestId('mockTableHeaderRow');
  const tableBody = getByTestId('mockTableBody');

  return {
    ...utils,
    table,
    tableHeaderRow,
    tableBody
  }
}

describe('Component - Table', () => {
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

  const data = [
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
  ];

  test('Should have correct margin', () => {
    const { table } = setup({ titles, data });

    expect(table).toHaveStyleRule('margin', '100px auto');
  });

  test('Should have correct max-width', () => {
    const { table } = setup({ titles, data });

    expect(table).toHaveStyleRule('max-width', '500px');
  });

  test('Should have correct min-width', () => {
    const { table } = setup({ titles, data });

    expect(table).toHaveStyleRule('min-width', '300px');
  });

  test('Should have correct width', () => {
    const { table } = setup({ titles, data });

    expect(table).toHaveStyleRule('width', '100%');
  });

  describe('Component - Table Header Row', () => {
    test('Should render', () => {
      const { tableHeaderRow } = setup({ titles });

      expect(tableHeaderRow).toBeTruthy();
    });

    test('Should display correct data', () => {
      const { tableHeaderRow } = setup({ titles });
      const tableHeaderTitle = JSON.parse(tableHeaderRow.getAttribute("titles"));

      expect(tableHeaderTitle[0].name).toEqual(titles[0].name);
      expect(tableHeaderTitle[1].name).toEqual(titles[1].name);
      expect(tableHeaderTitle[2].name).toEqual(titles[2].name);
    });
  });

  describe('Component - Table Body', () => {
    test('Should render', () => {
      const { tableBody } = setup({ data });

      expect(tableBody).toBeTruthy();
    });

    test('Should display correct data', () => {
      const { tableBody } = setup({ data });
      const tableBodyData = JSON.parse(tableBody.getAttribute("data"))

      expect(tableBodyData[0].date).toEqual(data[0].date);
      expect(tableBodyData[0].humidity).toEqual(data[0].humidity);
      expect(tableBodyData[0].temp).toEqual(data[0].temp);
    });
  });
})

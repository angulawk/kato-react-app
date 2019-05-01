import { render } from 'react-testing-library';
import Table from '../Table';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

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

  return {
    ...utils,
    table
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

  // describe('Component - Table Button', () => {
  //   test('Should have correct text as child', () => {
  //     const { tableButton } = setup({ titles, data });
  //
  //     expect(tableButton.textContent).toEqual(titles[0].name);
  //   });
  // })
})

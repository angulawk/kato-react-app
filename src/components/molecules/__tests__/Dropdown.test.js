import { cleanup, fireEvent, render } from 'react-testing-library';
import Dropdown from '../Dropdown';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    items: [],
    onSelect: () => {}
  }

  const utils = render(
    <Dropdown {...defaultProps} {...props} data-testid='dropdown' />
  );

  const { getByTestId } = utils;
  const dropdown = getByTestId('dropdown');

  return {
    ...utils,
    dropdown
  }
}

describe('Component - Dropdown', () => {
  let dropdown;
  let onSelect;
  let items = [
    {
      name: "München"
    },
    {
      name: "London"
    }
  ];

  beforeEach(() => {
    onSelect = jest.fn();
    dropdown = setup({onSelect, items}).dropdown;
  });

  afterEach(cleanup);

  test('Should have correct margin', () => {
    expect(dropdown).toHaveStyleRule('margin', '0 auto');
  });

  test('Should have correct width', () => {
    expect(dropdown).toHaveStyleRule('width', '200px');
  });
})

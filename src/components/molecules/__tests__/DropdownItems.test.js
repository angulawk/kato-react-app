import { cleanup, fireEvent, render } from 'react-testing-library';
import DropdownItems from '../DropdownItems';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    items: [],
    onSelect: () => {}
  }

  const utils = render(
    <DropdownItems {...defaultProps} {...props} data-testid='dropdownItems' />
  );

  const { getByTestId } = utils;
  const dropdownItems = getByTestId('dropdownItems');

  return {
    ...utils,
    dropdownItems
  }
}

describe('Component - DropdownItems', () => {
  let dropdownItems;
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
    dropdownItems = setup({onSelect, items}).dropdownItems;
  });

  afterEach(cleanup);

  test('Should have correct background-color', () => {
    expect(dropdownItems).toHaveStyleRule('background-color', '#000000');
  });

  test('Should have correct color', () => {
    expect(dropdownItems).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have working onSelect handler', () => {
    fireEvent.click(dropdownItems.firstChild);
    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
})

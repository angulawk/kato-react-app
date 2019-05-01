import { fireEvent, render } from 'react-testing-library';
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
    <DropdownItems {...defaultProps} {...props} />
  );

  const { getByTestId, getAllByTestId } = utils;
  const dropdownItems = getByTestId('dropdownItems');
  const dropdownItem = getAllByTestId('dropdownItem');

  return {
    ...utils,
    dropdownItems,
    dropdownItem
  }
}

describe('Component - DropdownItems', () => {
  let dropdownItems;
  let dropdownItem;
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
    const setupItems = setup({ onSelect, items });
    dropdownItems = setupItems.dropdownItems;
    dropdownItem = setupItems.dropdownItem;
  });

  test('Should have correct position', () => {
    expect(dropdownItems).toHaveStyleRule('position', 'absolute');
  });

  test('Should have correct width', () => {
    expect(dropdownItems).toHaveStyleRule('width', '200px');
  });

  describe("Component - DropdownItem", () => {
    test('Should render', () => {
      expect(dropdownItem).toBeTruthy();
    });

    test('Should have 2 dropdown items', () => {
      expect(dropdownItem.length).toEqual(2);
    });

    test('Should display correct data', () => {
      expect(dropdownItem[0].textContent).toEqual(items[0].name);
      expect(dropdownItem[1].textContent).toEqual(items[1].name);
    });

    test('Should have working onSelect handler', () => {
      fireEvent.click(dropdownItem[0]);
      expect(onSelect).toHaveBeenCalled();
      expect(onSelect).toHaveBeenCalledTimes(1);
    });
  });
})

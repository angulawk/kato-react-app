import { fireEvent, render } from 'react-testing-library';
import Dropdown from '../Dropdown';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

jest.mock("../../atoms/DropdownIcon", () => ({ icon }) => (
  <span
    data-testid="mockDropdownIcon"
    icon={icon}
  />
));

jest.mock("../../atoms/DropdownButton", () => ({
  onClick,
  children
}) => (
  <button
    data-testid="mockDropdownButton"
    onClick={onClick}
  >
    {children}
  </button>
));

jest.mock("../DropdownItems", () => ({
  items,
  onSelect
}) => (
  <div
    data-testid="mockDropdownItems"
    items={items}
    onClick={onSelect}
  />
));

function setup(props) {
  const defaultProps = {
    items: [],
    onSelect: () => {}
  }

  const utils = render(
    <Dropdown {...defaultProps} {...props} />
  );

  const { getByTestId } = utils;

  const dropdown = getByTestId('dropdown');
  const dropdownIcon = getByTestId('mockDropdownIcon');
  const dropdownButton = getByTestId('mockDropdownButton');

  return {
    ...utils,
    dropdown,
    dropdownButton,
    dropdownIcon
  }
}

describe('Component - Dropdown', () => {
  const items = [
    {
      name: "München"
    },
    {
      name: "London"
    }
  ];

  test('Should have correct margin', () => {
    const { dropdown } = setup({ items });

    expect(dropdown).toHaveStyleRule('margin', '0 auto');
  });

  test('Should have correct width', () => {
    const { dropdown } = setup({ items });

    expect(dropdown).toHaveStyleRule('width', '200px');
  });

  describe('Component - Dropdown Button', () => {
    test('Should have correct text', () => {
      const { dropdownButton } = setup({ items });

      expect(dropdownButton.textContent).toEqual(items[0].name);
    });

    test('Should have correct text', () => {
      const { dropdownButton } = setup({ items });

      expect(dropdownButton.textContent).toEqual(items[0].name);
    });

    test('Component Dropdown Icon should have correct icon', () => {
      const { dropdownIcon } = setup();

      expect(dropdownIcon.getAttribute("icon")).toEqual("arrowDown");
    });
  })

  describe('Component - Dropdown DropdownItems', () => {
    test('Dropdown items are not visible by default', () => {
      const { container } = setup({ items });
      const dropdownItems = container.querySelector('[data-testid="mockDropdownItems"]');

      expect(dropdownItems).toBeFalsy();
    });

    test('Dropdown items are visible after dropdown button click', () => {
      const { container, dropdownButton } = setup({ items });
      fireEvent.click(dropdownButton);

      const dropdownItems = container.querySelector('[data-testid=mockDropdownItems]');
      expect(dropdownItems).toBeTruthy();
    });
  })
})

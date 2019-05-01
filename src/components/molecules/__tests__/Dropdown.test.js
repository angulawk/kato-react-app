import { render } from 'react-testing-library';
import Dropdown from '../Dropdown';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

jest.mock("../../atoms/DropdownIcon", () => ({ icon }) => (
  <div
    data-testid="mockDropdownIcon"
    icon={icon}
  />
));

function handleDropdownButtonClick() {
  alert("clicked");
}

jest.mock("../../atoms/DropdownButton", () => ({ onClick }) => (
  <div
    data-testid="mockDropdownButton"
    onClick={handleDropdownButtonClick}
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
  const dropdownButton = getByTestId('mockDropdownButton');
  const dropdownIcon = getByTestId('mockDropdownIcon');

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
    // test('Should have correct text', () => {
    //   const { dropdownButton } = setup({ items });
    //
    //   expect(dropdownButton.textContent).toEqual(items[0].name);
    // });

    test('Component Dropdown Button should have correct icon', () => {
      const { dropdownIcon } = setup();

      expect(dropdownIcon.getAttribute("icon")).toEqual("arrowDown");
    });
  })
})

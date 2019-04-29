import { cleanup, render } from 'react-testing-library'
import DropdownIcon from '../DropdownIcon';
import React from 'react';
import 'jest-styled-components';
import 'jest-dom/extend-expect';

function setup(props) {
  const defaultProps = {
    icon: "arrow down"
  }

  const utils = render(
    <DropdownIcon {...defaultProps} {...props} data-testid='dropdownIcon' />
  );

  const { getByTestId } = utils;
  const dropdownIcon = getByTestId('dropdownIcon')

  return {
    ...utils,
    dropdownIcon
  }
}

describe('Component - DropdownIcon', () => {
  let dropdownIcon;
  let icon = "arrow down";

  beforeEach(() => {
    dropdownIcon = setup({icon}).dropdownIcon;
  });

  afterEach(cleanup);

  test('Should have correct border', () => {
    expect(dropdownIcon).toHaveStyleRule('border', 'solid #FFFFFF');
  });

  test('Should have correct padding', () => {
    expect(dropdownIcon).toHaveStyleRule('padding', '3px');
  });

  test('Should have correct icon', () => {
    expect(dropdownIcon.firstChild).toHaveClass('arrow');
  });
})

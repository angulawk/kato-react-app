import { render } from 'react-testing-library';
import DropdownButton from '../index';
import React from 'react';

const setup = props => {
  const defaultProps = {
    onClick: () => {}
  }

  const utils = render(
    <div>
      <DropdownButton {...defaultProps} {...props} data-testid='dropdownButton'>
        Click me
      </DropdownButton>
    </div>
  );

  const { getByTestId } = utils;
  const dropdownButton = getByTestId('dropdownButton')

  return {
    ...utils,
    dropdownButton,
  }
}

describe('Component - DropdownButton', () => {
  let dropdownButton;

  beforeEach(() => {
    dropdownButton = setup().dropdownButton;
  });

  test('Should have correct color', () => {
    expect(dropdownButton).toHaveStyleRule('color', '#FFFFFF');
  })
})

import { fireEvent, render } from 'react-testing-library';
import DropdownButton from '../index';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    onClick: () => {}
  }

  const utils = render(
    <DropdownButton {...defaultProps} {...props} data-testid='dropdownButton'>
      Click me
    </DropdownButton>
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
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    dropdownButton = setup({onClick}).dropdownButton;
  });

  test('Should have correct color', () => {
    expect(dropdownButton).toHaveStyleRule('color', '#FFFFFF');
  }); //TODO - add tests after adding styles

  test('Should have working onClick handler', () => {
    fireEvent.click(dropdownButton);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

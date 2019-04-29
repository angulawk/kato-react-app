import { cleanup, fireEvent, render } from 'react-testing-library';
import DropdownButton from '../DropdownButton';
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
  const dropdownButton = getByTestId('dropdownButton');

  return {
    ...utils,
    dropdownButton
  }
}

describe('Component - DropdownButton', () => {
  let dropdownButton;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    dropdownButton = setup({onClick}).dropdownButton;
  });

  afterEach(cleanup);

  test('Should have correct color', () => {
    expect(dropdownButton).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have correct background', () => {
    expect(dropdownButton).toHaveStyleRule('background-color', '#66a0ff');
  });

  test('Should have correct font size', () => {
    expect(dropdownButton).toHaveStyleRule('font-size', '16px');
  });

  test('Should have correct width', () => {
    expect(dropdownButton).toHaveStyleRule('width', '200px');
  });

  test('Should have working onClick handler', () => {
    fireEvent.click(dropdownButton);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

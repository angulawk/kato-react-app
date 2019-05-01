import { fireEvent, render } from 'react-testing-library';
import DropdownButton from '../DropdownButton';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    onClick: () => {}
  }

  const utils = render(
    <DropdownButton {...defaultProps} {...props}>
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

  test('Should have correct border', () => {
    expect(dropdownButton).toHaveStyleRule('border', 'none');
  });

  test('Should have correct cursor', () => {
    expect(dropdownButton).toHaveStyleRule('cursor', 'pointer');
  });

  test('Should have correct outline', () => {
    expect(dropdownButton).toHaveStyleRule('outline', 'inherit');
  });

  test('Should have correct display', () => {
    expect(dropdownButton).toHaveStyleRule('display', 'flex');
  });

  test('Should have correct justify-content', () => {
    expect(dropdownButton).toHaveStyleRule('justify-content', 'space-between');
  });

  test('Should have correct align-items', () => {
    expect(dropdownButton).toHaveStyleRule('align-items', 'center');
  });

  test('Should have correct width', () => {
    expect(dropdownButton).toHaveStyleRule('width', '200px');
  });

  test('Should have correct text-align', () => {
    expect(dropdownButton).toHaveStyleRule('text-align', 'left');
  });

  test('Should have correct padding', () => {
    expect(dropdownButton).toHaveStyleRule('padding', '10px 20px');
  });

  test('Should have correct font-size', () => {
    expect(dropdownButton).toHaveStyleRule('font-size', '16px');
  });

  test('Should have correct background-color', () => {
    expect(dropdownButton).toHaveStyleRule('background-color', '#66a0ff');
  });

  test('Should have correct font color', () => {
    expect(dropdownButton).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have working onClick handler', () => {
    fireEvent.click(dropdownButton);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Should have children', () => {
    expect(dropdownButton.textContent).toEqual("Click me");
  });
})

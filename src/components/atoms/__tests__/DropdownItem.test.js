import { fireEvent, render } from 'react-testing-library';
import DropdownItem from '../DropdownItem';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    onClick: () => {}
  }

  const utils = render(
    <DropdownItem {...defaultProps} {...props}>
      Click me
    </DropdownItem>
  );

  const { getByTestId } = utils;
  const dropdownItem = getByTestId('dropdownItem');

  return {
    ...utils,
    dropdownItem
  }
}

describe('Component - DropdownItem', () => {
  let dropdownItem;
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
    dropdownItem = setup({onClick}).dropdownItem;
  });

  test('Should have correct cursor', () => {
    expect(dropdownItem).toHaveStyleRule('cursor', 'pointer');
  });

  test('Should have correct border-top', () => {
    expect(dropdownItem).toHaveStyleRule('border-top', '1px solid #FFFFFF');
  });

  test('Should have correct font padding', () => {
    expect(dropdownItem).toHaveStyleRule('padding', '10px 20px');
  });

  test('Should have correct font-family', () => {
    expect(dropdownItem).toHaveStyleRule('font-family', 'sans-serif');
  });

  test('Should have correct background-color', () => {
    expect(dropdownItem).toHaveStyleRule('background-color', '#66a0ff');
  });

  test('Should have correct color', () => {
    expect(dropdownItem).toHaveStyleRule('color', '#FFFFFF');
  });

  test('Should have working onClick handler', () => {
    fireEvent.click(dropdownItem);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Should have children', () => {
    expect(dropdownItem.textContent).toEqual("Click me");
  });
})

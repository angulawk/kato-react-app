import { cleanup, render } from 'react-testing-library'
import Text from '../Text';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const utils = render(
    <Text {...props} data-testid='text'>
      Text to display
    </Text>
  );

  const { getByTestId } = utils;
  const text = getByTestId('text');

  return {
    ...utils,
    text
  }
}

describe('Component - Text', () => {
  let text;

  beforeEach(() => {
    text = setup().text;
  });

  afterEach(cleanup);
  
  test('Should have correct text-align', () => {
    expect(text).toHaveStyleRule('text-align', 'center');
  });

  test('Should have correct text-transform', () => {
    expect(text).toHaveStyleRule('text-transform', 'uppercase');
  });

  test('Should have correct font font-family', () => {
    expect(text).toHaveStyleRule('font-family', 'sans-serif');
  });

  test('Should have correct padding', () => {
    expect(text).toHaveStyleRule('padding', '15px 20px');
  });

  test('Should have correct letter-spacing', () => {
    expect(text).toHaveStyleRule('letter-spacing', '0.5px');
  });
})

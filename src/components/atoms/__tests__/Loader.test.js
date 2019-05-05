import { render } from 'react-testing-library';
import Loader from '../Loader';
import React from 'react';
import 'jest-styled-components';
import 'react-testing-library/cleanup-after-each';

function setup(props) {
  const defaultProps = {
    isLoading: false
  }

  const utils = render(
    <Loader {...defaultProps} {...props} />
  );

  const { getByTestId } = utils;
  const loader = getByTestId('loader');

  return {
    ...utils,
    loader
  }
}

describe('Component - Loader', () => {
  let loader;
  let isLoading;

  beforeEach(() => {
    loader = setup({ isLoading }).loader;
  });

  test('Should have correct position', () => {
    expect(loader).toHaveStyleRule('position', 'fixed');
  });

  test('Should have correct left', () => {
    expect(loader).toHaveStyleRule('left', "0");
  });

  test('Should have correct top', () => {
    expect(loader).toHaveStyleRule('top', "0");
  });

  test('Should have correct right', () => {
    expect(loader).toHaveStyleRule('right', "0");
  });

  test('Should have correct bottom', () => {
    expect(loader).toHaveStyleRule('bottom', "0");
  });

  test('Should have correct display', () => {
    expect(loader).toHaveStyleRule('display', 'flex');
  });

  test('Should have correct justify-content', () => {
    expect(loader).toHaveStyleRule('justify-content', 'center');
  });

  test('Should have correct align-items', () => {
    expect(loader).toHaveStyleRule('align-items', 'center');
  });

  test('Should have correct background-color', () => {
    expect(loader).toHaveStyleRule('background-color', '#FFFFFF');
  });

  test('Should have correct z-index', () => {
    expect(loader).toHaveStyleRule('z-index', '9999');
  });

  test('Should have correct transition', () => {
    expect(loader).toHaveStyleRule('transition', 'all 300ms ease-in-out');
  });

  test('Should have correct opacity if data is not loading', () => {
    expect(loader).toHaveStyleRule('opacity', '0');
  });

  test('Should have correct visibility if data is not loading', () => {
    expect(loader).toHaveStyleRule('visibility', 'hidden');
  });

  test('Should render', () => {
    expect(loader).toBeTruthy();
  });
})

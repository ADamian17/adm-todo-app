import { render } from '@testing-library/react';

import ColumnsContainer from '..';

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('App', () => {
  it('renders headline', () => {
    const tree = render(<ColumnsContainer />);

    expect(tree).toMatchSnapshot()
  });
});
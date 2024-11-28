// src/__tests__/Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

test('renders Home component correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
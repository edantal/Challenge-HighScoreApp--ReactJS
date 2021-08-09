import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

test("Init app", () => {
  const { getByText } = render(<App />);

  expect(getByText('High Score App')).not.toBeNull();
});

test("User interaction", () => {
  const { getByText, getByLabelText } = render(<App />);

  const scoreBtn = getByLabelText('Get score');
  fireEvent.click(scoreBtn);

  getByText('Try Again');
});

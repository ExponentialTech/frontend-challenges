import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
/*
Simple tests for UI rendering, but would like to add tests for the api request before release to production.
Testing the Api request might require a mocking service for axios or some other mocking solution.
*/

test('renders the Table component', () => {
  const { getByText } = render(<App />);
  const tableHeader = getByText(/Impact Assessment Data/i);
  const columnHeader = getByText(/COMPANY NAME/i);
  expect(tableHeader).toBeInTheDocument();
  expect(columnHeader).toBeInTheDocument();
});

test('renders the Page component', () => {
  const { getByText } = render(<App />);
  const pageNext = getByText(/next/i);
  expect(pageNext).toBeInTheDocument();
});
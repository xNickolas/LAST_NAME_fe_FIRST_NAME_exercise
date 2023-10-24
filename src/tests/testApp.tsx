import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from 'App';

test('renders Teams component when at root path', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(getByText('Teams')).toBeInTheDocument();
});

test('renders TeamOverview component when at /team/:teamId path', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/team/1']}>
      <App />
    </MemoryRouter>
  );

  expect(getByText('Team Overview')).toBeInTheDocument();
});


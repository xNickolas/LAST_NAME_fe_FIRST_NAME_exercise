import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from 'App';

describe('App', () => {

  it('renders Teams component when at root path', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  
    expect(getByText('Teams')).toBeInTheDocument();
  });


  it('renders TeamOverview component when at /team/:teamId path', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/team/1']}>
        <App />
      </MemoryRouter>
    );
  
    expect(getByText('Team Overview')).toBeInTheDocument();
  });

  it('renders UserOverview component when at /user/:userId path', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/user/123']}>
        <App />
      </MemoryRouter>
    );

    expect(getByText('User Overview')).toBeInTheDocument();
  });
});




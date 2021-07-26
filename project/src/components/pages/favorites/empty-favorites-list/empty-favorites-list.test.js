import React from 'react';
import {render, screen} from '@testing-library/react';
import EmptyFavoritesList from './empty-favorites-list';


describe('Component: EmptyFavoritesList', () => {
  it('should render correctly', () => {
    render(<EmptyFavoritesList />);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips/i)).toBeInTheDocument();
  });
});

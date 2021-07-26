import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsLoadingSpinner from './reviews-loading-spinner';

describe('Component: ReviewsLoadingSpinner', () => {
  it('should render correctly', () => {
    render(<ReviewsLoadingSpinner />);

    expect(screen.getByText(/Reviews loading/i)).toBeInTheDocument();
  });
});

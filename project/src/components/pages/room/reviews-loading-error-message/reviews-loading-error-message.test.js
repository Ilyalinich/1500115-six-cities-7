import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsLoadingErrorMessage from './reviews-loading-error-message';

describe('Component: ReviewsLoadingErrorMessage', () => {
  it('should render correctly', () => {
    render(<ReviewsLoadingErrorMessage />);

    expect(screen.getByText(/Reviews loading error, please try again later.../i)).toBeInTheDocument();
  });
});

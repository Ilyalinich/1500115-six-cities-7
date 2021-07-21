import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsLoadingErrorMessage from './reviews-loading-error-message';

describe('Component: ReviewsLoadingErrorMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewsLoadingErrorMessage />
      </Router>,
    );

    expect(screen.getByText(/Reviews loading error, please try again later.../i)).toBeInTheDocument();
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsLoadingScreen from './reviews-loading-screen';

describe('Component: ReviewsLoadingScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ReviewsLoadingScreen />
      </Router>,
    );

    expect(screen.getByText(/Reviews loading/i)).toBeInTheDocument();
  });
});

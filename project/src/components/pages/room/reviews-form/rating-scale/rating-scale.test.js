import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import RatingScale from './rating-scale';


describe('Component: RatingScale', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeProps = {
      isDisabled: false,
      currentRatingValue: '1',
      ratingChangeHandler: () => {},
    };

    render(
      <Router history={history}>
        <RatingScale
          {...fakeProps}
        />
      </Router>,
    );

    expect(screen.getByTestId('rating changer 1')).toBeInTheDocument();
    expect(screen.getByTestId('rating changer 2')).toBeInTheDocument();
    expect(screen.getByTestId('rating changer 3')).toBeInTheDocument();
    expect(screen.getByTestId('rating changer 4')).toBeInTheDocument();
    expect(screen.getByTestId('rating changer 5')).toBeInTheDocument();
  });
});

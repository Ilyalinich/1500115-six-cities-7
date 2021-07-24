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

    expect(screen.queryAllByTestId('rating changer')).toHaveLength(5);
  });
});

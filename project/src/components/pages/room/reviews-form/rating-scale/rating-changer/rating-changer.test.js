import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import RatingChanger from './rating-changer';


describe('Component: RatingChanger', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeProps = {
      value: '1',
      title: 'terribly',
      isDisabled: false,
      currentRatingValue: '1',
      ratingChangeHandler: () => {},
    };

    render(
      <Router history={history}>
        <RatingChanger
          {...fakeProps}
        />
      </Router>,
    );

    expect(screen.getByTestId('rating changer 1')).toBeInTheDocument();
  });
});

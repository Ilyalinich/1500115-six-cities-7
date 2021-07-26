import React from 'react';
import {render, screen} from '@testing-library/react';
import RatingScale from './rating-scale';
import {RatingValuesMap} from '../../../../../constant';


describe('Component: RatingScale', () => {
  it('should render correctly', () => {
    const fakeProps = {
      isDisabled: false,
      currentRatingValue: '1',
      ratingChangeHandler: jest.fn(),
    };

    render(
      <RatingScale
        {...fakeProps}
      />,
    );

    expect(screen.queryAllByTestId('rating changer')).toHaveLength(Object.keys(RatingValuesMap).length);
  });
});

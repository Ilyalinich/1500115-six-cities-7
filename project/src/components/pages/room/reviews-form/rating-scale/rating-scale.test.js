import React from 'react';
import {render, screen} from '@testing-library/react';
import {RatingValuesMap} from '../../../../../constant';
import RatingScale from './rating-scale';


describe('Component: RatingScale', () => {
  it('should render correctly', () => {
    const fakeProps = {
      isDisabled: false,
      currentRatingValue: '1',
      onRatingChange: jest.fn(),
    };

    render(
      <RatingScale
        {...fakeProps}
      />,
    );

    expect(screen.queryAllByTestId('rating changer')).toHaveLength(Object.keys(RatingValuesMap).length);
  });
});

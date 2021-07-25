import React from 'react';
import {render, screen} from '@testing-library/react';
import RatingChanger from './rating-changer';


describe('Component: RatingChanger', () => {
  it('should render correctly', () => {
    const fakeProps = {
      value: '1',
      title: 'terribly',
      isDisabled: false,
      currentRatingValue: '1',
      onRatingChange: jest.fn(),
    };

    render(
      <RatingChanger
        {...fakeProps}
      />,
    );

    expect(screen.getByTestId('rating changer')).toBeInTheDocument();
  });
});

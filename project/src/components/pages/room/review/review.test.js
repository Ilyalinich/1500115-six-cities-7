import React from 'react';
import {render, screen} from '@testing-library/react';
import Review from './review';


describe('Component: Review', () => {
  it('should render correctly', () => {
    const fakeReview = {
      comment: 'We loved it so much, the house, the veiw, the location just great..',
      date: '2021-06-30T16:51:35.215Z',
      id: 1,
      rating: 3,
      user: {
        avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
        id: 16,
        isPro: true,
        name: 'Mollie',
      },
    };

    render(
      <Review
        review={fakeReview}
      />,
    );

    expect(screen.getByText(/We loved it so much, the house, the veiw, the location just great../i)).toBeInTheDocument();
    expect(screen.getByText(/Mollie/i)).toBeInTheDocument();
  });
});

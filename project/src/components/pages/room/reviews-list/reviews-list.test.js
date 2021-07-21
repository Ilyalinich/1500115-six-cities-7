import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsList from './reviews-list';


describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeReviews = [
      {
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
      },
    ];


    render(
      <Router history={history}>
        <ReviewsList
          reviews={fakeReviews}
        />
      </Router>,
    );


    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByTestId('reviews counter')).toHaveTextContent(new RegExp(`${fakeReviews.length}`, 'i'));
    expect(screen.getByText(/We loved it so much, the house, the veiw, the location just great../i)).toBeInTheDocument();
    expect(screen.getByText(/Mollie/i)).toBeInTheDocument();
  });
});

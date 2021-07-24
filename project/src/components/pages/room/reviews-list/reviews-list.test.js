import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import ReviewsList from './reviews-list';


const fakeReviewComponent = () => (<p>Correct render of Review component</p>);
jest.mock('../review/review', () => fakeReviewComponent);


describe('Component: ReviewsList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeReviews = [
      {
        comment: '',
        date: '',
        id: 1,
        rating: 3,
        user: {
          avatarUrl: '',
          id: 16,
          isPro: true,
          name: '',
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
    expect(screen.queryAllByText(/Correct render of Review component/i)).toHaveLength(1);
  });
});

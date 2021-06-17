import React from 'react';
import PropTypes from 'prop-types';
import {reviewProp} from '../review/review-prop';
import Review from '../review/review';
import {compareDate} from '../../../../util/day-js';


const REVIEWS_MAX_COUNT = 10;

const getSortedReviews = (reviews) => {
  const sortedReviews = reviews
    .slice()
    .sort((prevReview, nextReview) => compareDate(nextReview.date, prevReview.date));

  if (sortedReviews.length > REVIEWS_MAX_COUNT) {
    return sortedReviews.slice(0, REVIEWS_MAX_COUNT);
  }

  return sortedReviews;
};

function ReviewsList({reviews}) {
  const sortedReviews = getSortedReviews(reviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedReviews.map((review) => (
            <Review
              key={review.id.toString()}
              review={review}
            />
          ))
        }
      </ul>
    </>
  );
}


ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewProp),
  ),
};


export default ReviewsList;

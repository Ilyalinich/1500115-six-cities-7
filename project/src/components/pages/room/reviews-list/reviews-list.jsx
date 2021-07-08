import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Review from '../review/review';
import {compareDate} from '../../../../util/day-js';
import ReviewsLoadingScreen from '../reviews-loading-screen/reviews-loading-screen';
import {getReviews} from '../../../../store/api-action';


const REVIEWS_MAX_COUNT = 10;

const sortReviews = (reviews) => {
  const sortedReviews = reviews
    .slice()
    .sort((prevReview, nextReview) => compareDate(nextReview.date, prevReview.date));

  if (sortedReviews.length > REVIEWS_MAX_COUNT) {
    return sortedReviews.slice(0, REVIEWS_MAX_COUNT);
  }

  return sortedReviews;
};


function ReviewsList({offerId, loadReviews}) {
  const [state, setState] = useState(
    {
      isLoading: true,
      reviews: [],
    },
  );

  const {isLoading, reviews} = state;


  useEffect(() => {
    loadReviews(offerId)
      .then((reviewsList) => setState(
        {
          isLoading: false,
          reviews: reviewsList,
        },
      ))
      .catch(() => setState(
        {
          isLoading: false,
          reviews: null,
        },
      ));

  }, [loadReviews, offerId]);


  if (!reviews) {
    return (
      <p
        style={
          {
            color: 'red',
            marginBottom: '50px',
            textAlign: 'center',
          }
        }
      >
        Reviews loading error, please try again later...
      </p>
    );
  }


  if (isLoading) {
    return <ReviewsLoadingScreen />;
  }

  const sortedReviews = sortReviews(reviews);


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
  loadReviews: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadReviews(offerId) {
    return dispatch(getReviews(offerId));
  },
});


export {ReviewsList};
export default connect(null, mapDispatchToProps)(ReviewsList);

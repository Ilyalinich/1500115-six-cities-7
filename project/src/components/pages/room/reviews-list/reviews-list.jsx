import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reviewProp} from '../review/review-prop';
import Review from '../review/review';
import {compareDate} from '../../../../util/day-js';
import ReviewsLoadingScreen from '../reviews-loading-screen/reviews-loading-screen';
import {loadReviews} from '../../../../store/api-action';


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


function ReviewsList({isReviewsLoaded, reviews, offerId, onInit}) {
  const [isNeedErrorMessage, setIsNeedErrorMessage] = useState(false);

  const loadFailAction = () => {
    setIsNeedErrorMessage(true);
  };

  useEffect(() => {
    onInit(offerId, loadFailAction);

    // return () => ;
  }, [onInit, offerId]);

  if (isNeedErrorMessage) {
    return (
      <span style={{color: 'red'}}>
        Reviews loading error, please try again later...
      </span>
    );
  }

  if (!isReviewsLoaded) {
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
  isReviewsLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape(reviewProp),
  ),
  onInit: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
};

const mapStateToProps = ({isReviewsLoaded, reviews}) => ({
  isReviewsLoaded,
  reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onInit(offerId, loadFailAction) {
    dispatch(loadReviews(offerId, loadFailAction));
  },
});


export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

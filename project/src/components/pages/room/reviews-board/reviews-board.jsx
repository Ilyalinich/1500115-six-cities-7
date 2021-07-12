import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsLoadingScreen from '../reviews-loading-screen/reviews-loading-screen';
import {loadReviews} from '../../../../store/api-action';


function ReviewsBoard({offerId}) {
  const [state, setState] = useState(
    {
      isLoading: true,
      reviews: [],
      isLoadingError: false,
    },
  );

  const {isLoading, reviews, isLoadingError} = state;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadReviews(offerId))
      .then((reviewsList) => setState(
        {
          isLoading: false,
          reviews: reviewsList,
          isLoadingError: false,
        },
      ))
      .catch(() => setState(
        {
          isLoading: false,
          reviews: [],
          isLoadingError: true,
        },
      ));

  }, [dispatch, offerId]);


  if (isLoading) {
    return <ReviewsLoadingScreen />;
  }

  return (
    <section className="property__reviews reviews">
      <ReviewsList reviews={reviews} isLoadingError={isLoadingError} />
      <ReviewsForm
        offerId={offerId}
        updateReviewsList={
          (update) => setState((prevState) => ({
            ...prevState,
            reviews: update,
            isLoadingError: false,
          }))
        }
      />
    </section>
  );
}


ReviewsBoard.propTypes = {
  offerId: PropTypes.string.isRequired,
};


export default ReviewsBoard;

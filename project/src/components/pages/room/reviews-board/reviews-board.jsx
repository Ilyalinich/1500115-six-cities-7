import React from 'react';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';


function ReviewsBoard({offerId}) {

  return (
    <section className="property__reviews reviews">
      <ReviewsList offerId={offerId}/>
      <ReviewsForm offerId={offerId}/>
    </section>
  );
}


ReviewsBoard.propTypes = {
  offerId: PropTypes.string.isRequired,
};


export default ReviewsBoard;

import React from 'react';
import PropTypes from 'prop-types';
import RatingChanger from './rating-changer/rating-changer';


const RatingValuesMap = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};


function RatingScale(props) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Object
          .keys(RatingValuesMap)
          .sort((valueA, valueB) => valueB - valueA)
          .map((value) => (
            <RatingChanger
              key={value}
              value={value}
              title={RatingValuesMap[value]}
              {...props}
            />
          ))
      }
    </div>
  );
}


RatingScale.propTypes = {
  ratingChangeHandler: PropTypes.func.isRequired,
  currentRatingValue: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};


export default React.memo(RatingScale);

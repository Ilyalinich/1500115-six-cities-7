import React from 'react';
import PropTypes from 'prop-types';


function RatingChanger({value, title, isDisabled, currentRatingValue, changeHandler}) {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={changeHandler}
        checked={currentRatingValue === value}
        disabled={isDisabled}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </>
  );
}


RatingChanger.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentRatingValue: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};


export default RatingChanger;

import React from 'react';
import PropTypes from 'prop-types';
import {getRatingInPercents} from '../../../../util/common';
import {formatDate} from '../../../../util/day-js';
import {reviewProp} from '../review/review-prop';


const DateFormatTemplate = {
  STANDART: 'YYYY-MM-DD',
  HUMANIZE: 'MMMM YYYY',
};


function Review({review}) {
  const {user, rating, date, comment} = review;
  const {avatarUrl, name} = user;

  const ratingInPercents = getRatingInPercents(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingInPercents}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={formatDate(date, DateFormatTemplate.STANDART)}>{formatDate(date, DateFormatTemplate.HUMANIZE)}</time>
      </div>
    </li>
  );
}


Review.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired,
};


export default Review;

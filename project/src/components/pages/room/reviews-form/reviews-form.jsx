import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RatingChanger from '../rating-changer/rating-changer';
import {connect} from 'react-redux';
import {postReview} from '../../../../store/api-action';
import HelpMessage from './help-message/help-message';
import PostErrorMessage from './post-error-message/post-error-message';


const ERROR_MESSAGE_SHOW_TIME = 5000;

const CommentLength = {
  MIN: 50,
  MAX: 300,
};

const RatingValuesMap = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};


function ReviewsForm({offerId, sendReview}) {
  const [rating, setRatingValue] = useState('');
  const [comment, setComment] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [isNeedErrorMessage, setIsNeedErrorMessage] = useState(false);

  const isStateValid = rating && comment.length > CommentLength.MIN && comment.length < CommentLength.MAX;

  const sendSuccessAction = () => {
    setIsBlocked(false);
    setRatingValue('');
    setComment('');
  };

  const sendFailAction = () => {
    setIsNeedErrorMessage(true);
    setTimeout(() => setIsNeedErrorMessage(false), ERROR_MESSAGE_SHOW_TIME);
    setIsBlocked(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsBlocked(true);
    sendReview(
      offerId,
      {
        comment,
        rating,
      },
      sendSuccessAction,
      sendFailAction,
    );
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
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
                currentRatingValue={rating}
                changeHandler={({target}) => setRatingValue(target.value)}
                isBlocked={isBlocked}
              />
            ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        required
        onChange={({target}) => setComment(target.value)}
        disabled={isBlocked}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          {isNeedErrorMessage ? <PostErrorMessage /> : <HelpMessage />}
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isStateValid || isBlocked}>Submit</button>
      </div>
    </form>
  );
}

ReviewsForm.propTypes = {
  sendReview: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendReview(offerId, newReview, onSuccess, onFail) {
    dispatch(postReview(offerId, newReview, onSuccess, onFail));
  },
});


export {ReviewsForm};
export default connect(null, mapDispatchToProps)(ReviewsForm);

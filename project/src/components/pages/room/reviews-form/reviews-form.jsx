import React, {useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../../../constant';
import {getAuthStatus} from '../../../../store/authorization/selectors';
import {postReview} from '../../../../store/api-action';
import RatingScale from './rating-scale/rating-scale';
import CommentField from './comment-field/comment-field';
import HelpMessage from './help-message/help-message';
import PostErrorMessage from './post-error-message/post-error-message';


const ERROR_MESSAGE_SHOW_TIME = 5000;

const CommentLength = {
  MIN: 50,
  MAX: 300,
};


function ReviewsForm({offerId, updateReviewsList}) {
  const initialState = {
    rating: '',
    comment: '',
    isBlocked: false,
    isNeedErrorMessage: false,
  };

  const [state, setState] = useState(initialState);
  const {rating, comment, isBlocked, isNeedErrorMessage} = state;

  const authorizationStatus = useSelector(getAuthStatus);
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const dispatch = useDispatch();

  const ratingChangerClickHandler = useCallback(
    ({target}) => setState((prevState) => ({
      ...prevState,
      rating: target.value,
    })),
    [],
  );

  const commentChangeHandler = useCallback(
    ({target}) => setState((prevState) => ({
      ...prevState,
      comment: target.value,
    })),
    [],
  );


  if (!isUserAuthorized) {
    return '';
  }


  const isStateValid = rating && comment.length > CommentLength.MIN && comment.length < CommentLength.MAX;

  const onSendSuccess = () => setState(initialState);

  const onSendFail = () => {
    setState((prevState) => ({
      ...prevState,
      isNeedErrorMessage: true,
    }));

    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isNeedErrorMessage: false,
        isBlocked: false,
      }));
    }, ERROR_MESSAGE_SHOW_TIME);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newReview = {
      comment,
      rating,
    };

    setState((prevState) => ({
      ...prevState,
      isBlocked: true,
    }));

    dispatch(postReview(offerId, newReview))
      .then((reviews) => updateReviewsList(reviews))
      .then(() => onSendSuccess())
      .catch(() => onSendFail());
  };


  return (
    <form
      className="reviews__form form"
      action="#"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingScale
        currentRatingValue={rating}
        ratingChangeHandler={ratingChangerClickHandler}
        isDisabled={isBlocked}
      />
      <CommentField
        value={comment}
        onChange={commentChangeHandler}
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
  offerId: PropTypes.string.isRequired,
  updateReviewsList: PropTypes.func.isRequired,
};


export default ReviewsForm;

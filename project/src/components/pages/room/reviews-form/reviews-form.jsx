import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RatingChanger from '../rating-changer/rating-changer';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../../../constant';
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


function ReviewsForm({authorizationStatus, offerId, sendReview, updateReviewsList}) {
  const initialState = {
    rating: '',
    comment: '',
    isBlocked: false,
    isNeedErrorMessage: false,
  };

  const [state, setState] = useState(initialState);
  const {rating, comment, isBlocked, isNeedErrorMessage} = state;


  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

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

    sendReview(offerId, newReview)
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
                changeHandler={
                  ({target}) => setState((prevState) => ({
                    ...prevState,
                    rating: target.value,
                  }))
                }
                isDisabled={isBlocked}
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
        onChange={({target}) => setState((prevState) => ({
          ...prevState,
          comment: target.value,
        }))}
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
  authorizationStatus: PropTypes.string.isRequired,
  offerId: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired,
  updateReviewsList: PropTypes.func.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  sendReview(offerId, newReview) {
    return dispatch(postReview(offerId, newReview));
  },
});


export {ReviewsForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);

import React, {useState} from 'react';
import RatingChanger from '../rating-changer/rating-changer';


const RatingValuesMap = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};


function ReviewsForm() {
  const [ratingValue, setRatingValue] = useState('');
  const [comment, setComment] = useState('');


  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
      // функция, переданная из родительского компонента
      }}
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
                currentRatingValue={ratingValue}
                changeHandler={({target}) => setRatingValue(target.value)}
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
        onChange={({target}) => setComment(target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
}


export default ReviewsForm;

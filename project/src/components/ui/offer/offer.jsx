import {PropertyTypesMap} from '../../../constant';
import {getRatingInPercents} from '../../../util';
import React from 'react';
import PropTypes from 'prop-types';
import {offerBasicProp} from '../../ui/offer/offer-prop';
import {AppRoute} from '../../../constant';
import {Link} from 'react-router-dom';


function Offer(props) {
  const {id, price, rating, title, type, previewImage, isFavorite, isPremium, onMouseEnter} = props;

  const ratingInPercents = getRatingInPercents(rating);


  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnter}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt=""/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingInPercents}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{PropertyTypesMap[type]}</p>
      </div>
    </article>
  );
}


Offer.propTypes = {
  ...offerBasicProp,
  onMouseEnter: PropTypes.func.isRequired,
};

export default Offer;

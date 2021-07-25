import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import FavoriteOffer from '../favorite-offer/favorite-offer';


function FavoritesLocations({city, offers, updateOffers}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="#"
            style={{
              cursor: 'default',
              pointerEvents: 'none',
            }}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => (
            <FavoriteOffer
              key={offer.id.toString()}
              id={offer.id}
              price={offer.price}
              rating={offer.rating}
              title={offer.title}
              type={offer.type}
              previewImage={offer.previewImage}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              favButtonClickHandler={updateOffers}
            />
          ))
        }
      </div>
    </li>
  );
}

FavoritesLocations.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerBasicProp),
  ),
  updateOffers: PropTypes.func.isRequired,
};


export default FavoritesLocations;

import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import {Link} from 'react-router-dom';
import FavoriteOffer from '../favorite-offer/favorite-offer';


function FavoritesLocations({city, offers, listUpdateHandler}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
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
              listUpdateHandler={listUpdateHandler}
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
    PropTypes.shape(offerFullProp),
  ),
  listUpdateHandler: PropTypes.func.isRequired,
};


export default FavoritesLocations;

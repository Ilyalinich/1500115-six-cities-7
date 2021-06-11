import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../offer/offer-prop';
import {Link} from 'react-router-dom';
import FavoritesLocation from '../favorite-location/favorite-location';


function FavoritesLocations({city, offers}) {
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
            <FavoritesLocation
              key={offer.id.toString()}
              offer={offer}
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
};


export default FavoritesLocations;

import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import FavoritesLocations from '../favorites-locations/favorites-locations';


function FavoritesList({offers, updateOffers}) {

  const offersMap = offers.reduce((accumulator, offer) => {
    if (accumulator[offer.city.name]) {
      accumulator[offer.city.name].push(offer);
    } else {
      accumulator[offer.city.name] = [offer];
    }

    return accumulator;
  }, {});


  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Object
            .keys(offersMap)
            .map((city) => <FavoritesLocations key={city} city={city} offers={offersMap[city]} updateOffers={updateOffers} />)
        }
      </ul>
    </section>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  updateOffers: PropTypes.func.isRequired,
};


export default FavoritesList;

import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import FavoritesLocations from '../favorites-locations/favorites-locations';


function FavoritesList({offers}) {

  const offersMap = offers.reduce((accumulator, offer) => {
    if (accumulator[offer.city.name]) {
      accumulator[offer.city.name].push(offer);
    } else {
      accumulator[offer.city.name] = [offer];
    }

    return accumulator;
  }, {});


  return (
    <ul className="favorites__list">
      {
        Object
          .keys(offersMap)
          .map((city) => <FavoritesLocations key={city} city={city} offers={offersMap[city]}/>)
      }
    </ul>
  );
}

FavoritesList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
};


export default FavoritesList;

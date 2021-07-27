import React from 'react';
import {useSelector} from 'react-redux';
import {getCurrentCityOffers} from '../../../../store/data/selectors';
import {getActiveOfferId} from '../../../../store/operation-process/selectors';
import Map from '../../../ui/map/map';


function CityMap() {
  const currentCityOffers = useSelector(getCurrentCityOffers);
  const activeOfferId = useSelector(getActiveOfferId);

  return (
    <Map
      offers={currentCityOffers}
      activeOfferId={activeOfferId}
      initialPosition={currentCityOffers[0].city.location}
    >
    </Map>
  );
}


export default CityMap;

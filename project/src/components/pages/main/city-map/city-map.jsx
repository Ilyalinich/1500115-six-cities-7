import React from 'react';
import {useSelector} from 'react-redux';
import Map from '../../../ui/map/map';
import {getCurrentCityOffers} from '../../../../store/data/selectors';
import {getActiveOfferId} from '../../../../store/operation-process/selectors';


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

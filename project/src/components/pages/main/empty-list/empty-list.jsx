import React from 'react';
import {useSelector} from 'react-redux';
import {getCurrentCity} from '../../../../store/operation-process/selectors';


function EmptyList() {
  const cityName = useSelector(getCurrentCity);

  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
    </div>
  );
}


export default EmptyList;

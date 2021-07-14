import {SINGULAR_NUMBER} from '../../../../constant';
import React from 'react';
import {useSelector} from 'react-redux';
import {getCurrentCityOffersCount} from '../../../../store/data/selectors';
import {getCurrentCity} from '../../../../store/operation-process/selectors';


function FoundOffersTitle() {
  const offersCount = useSelector(getCurrentCityOffersCount);
  const currentCity = useSelector(getCurrentCity);

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} ${offersCount === SINGULAR_NUMBER ? 'place' : 'places'} to stay in ${currentCity}`}</b>
    </>
  );
}


export default FoundOffersTitle;

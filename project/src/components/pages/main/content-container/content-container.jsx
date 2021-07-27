import React from 'react';
import {useSelector} from 'react-redux';
import {getCurrentCityOffersCount} from '../../../../store/data/selectors';
import FoundOffersTitle from '../found-offers-title/found-offers-title';
import OffersSortForm from '../offers-sort-form/offers-sort-form';
import OffersList from '../offers-list/offers-list';
import EmptyList from '../empty-list/empty-list';
import CityMap from '../city-map/city-map';


function ContentContainer() {
  const offersCount = useSelector(getCurrentCityOffersCount);
  const isOffersListEmpty = offersCount === 0;

  return (
    <div className="cities">
      <div className={`cities__places-container ${isOffersListEmpty ? 'cities__places-container--empty': ''} container`}>
        <section className={isOffersListEmpty ? 'cities__no-places' : 'cities__places places'}>
          {
            isOffersListEmpty
              ? <EmptyList />
              : (
                <>
                  <FoundOffersTitle />
                  <OffersSortForm />
                  <OffersList />
                </>
              )
          }
        </section>
        <div className="cities__right-section">
          {
            !isOffersListEmpty && (
              <section className="cities__map map">
                <CityMap />
              </section>
            )
          }
        </div>
      </div>
    </div>
  );
}


export default ContentContainer;

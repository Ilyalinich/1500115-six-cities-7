import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OffersList from '../offers-list/offers-list';
import CityMap from '../city-map/city-map';
import FoundOffersTitle from '../found-offers-title/found-offers-title';
import OffersSortForm from '../offers-sort-form/offers-sort-form';
import EmptyList from '../empty-list/empty-list';


function ContentContainer({offersCount, currentCity}) {
  const isOffersListEmpty = offersCount === 0;

  return (
    <div className={`cities__places-container ${isOffersListEmpty && 'cities__places-container--empty'} container`}>
      <section className={isOffersListEmpty ? 'cities__no-places' : 'cities__places places'}>
        {
          isOffersListEmpty
            ? <EmptyList cityName={currentCity} />
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
  );
}

ContentContainer.propTypes = {
  offersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offersCount: state.currentCityOffers.length,
  currentCity: state.currentCity,
});


export {ContentContainer};
export default connect(mapStateToProps)(ContentContainer);

import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import {connect} from 'react-redux';
import Map from '../../../ui/map/map';


function CityMap({offers, activeOfferId}) {
  return (
    <Map
      offers={offers}
      activeOfferId={activeOfferId}
      initialPosition={offers[0].city.location}
    >
    </Map>
  );
}

CityMap.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  activeOfferId: PropTypes.number,
};


const mapStateToProps = (state) => ({
  offers: state.currentCityOffers,
  activeOfferId: state.activeOfferId,
});


export {CityMap};
export default connect(mapStateToProps)(CityMap);

import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import {connect} from 'react-redux';
import Map from '../../../ui/map/map';


function CityMap({currentCityOffers, activeOfferId}) {
  return (
    <Map
      offers={currentCityOffers}
      activeOfferId={activeOfferId}
      initialPosition={currentCityOffers[0].city.location}
    >
    </Map>
  );
}

CityMap.propTypes = {
  currentCityOffers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  activeOfferId: PropTypes.number,
};


const mapStateToProps = ({currentCityOffers, activeOfferId}) => ({
  currentCityOffers,
  activeOfferId,
});


export {CityMap};
export default connect(mapStateToProps)(CityMap);

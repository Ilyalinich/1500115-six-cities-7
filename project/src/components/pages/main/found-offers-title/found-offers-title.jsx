import {SINGULAR_NUMBER} from '../../../../constant';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


function FoundOffersTitle({offersCount, currentCity}) {
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} ${offersCount === SINGULAR_NUMBER ? 'place' : 'places'} to stay in ${currentCity}`}</b>
    </>
  );
}

FoundOffersTitle.propTypes = {
  offersCount: PropTypes.number.isRequired,
  currentCity: PropTypes.string.isRequired,
};


const mapStateToProps = ({currentCity, currentCityOffers}) => ({
  offersCount: currentCityOffers.length,
  currentCity,
});


export {FoundOffersTitle};
export default connect(mapStateToProps)(FoundOffersTitle);

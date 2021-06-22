import React from 'react';
import PropTypes from 'prop-types';


function EmptyList({cityName}) {
  return (
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No places to stay available</b>
      <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
    </div>
  );
}

EmptyList.propTypes = {
  cityName: PropTypes.string.isRequired,
};


export default EmptyList;

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function City({cityName, currentCity, onClick}) {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${cityName === currentCity && 'tabs__item--active'}`} to="#" onClick={onClick}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}


City.propTypes = {
  cityName: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default City;

import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function City({cityName, isActive, onClick}) {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to="#" onClick={onClick}>
        <span>{cityName}</span>
      </Link>
    </li>
  );
}


City.propTypes = {
  cityName: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default City;

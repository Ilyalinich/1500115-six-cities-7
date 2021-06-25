import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {CITIES} from '../../../../constant';
import City from '../../../ui/city/city';
import {ActionCreator} from '../../../../store/action';


function CitiesNavMenu({currentCity, changeCity}) {
  return (
    <ul className="locations__list tabs__list">
      {
        CITIES.map((city) => (
          <City
            key={city}
            cityName={city}
            currentCity={currentCity}
            onClick={() => changeCity(city)}
          />
        ))
      }
    </ul>
  );
}


CitiesNavMenu.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});


export {CitiesNavMenu};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesNavMenu);

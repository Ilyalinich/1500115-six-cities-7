import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {CITIES} from '../../../../constant';
import City from '../../../ui/city/city';
import {changeCity} from '../../../../store/action';
import {getCurrentCity} from '../../../../store/operation-process/selectors';


function CitiesNavMenu() {
  const currentCity = useSelector(getCurrentCity);
  const dispatch = useDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city) => (
            <City
              key={city}
              cityName={city}
              isActive={city === currentCity}
              onClick={() => dispatch(changeCity(city))}
            />
          ))
        }
      </ul>
    </section>
  );
}


export default CitiesNavMenu;

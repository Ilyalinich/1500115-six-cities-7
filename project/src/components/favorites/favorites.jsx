import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../offer/offer-prop';
import {Link} from 'react-router-dom';
import FavoritesLocations from '../favorites-locations/favorites-locations';


function Favorites({offers}) {

  const offersMap = offers.reduce((accumulator, offer) => {
    if (accumulator[offer.city.name]) {
      accumulator[offer.city.name].push(offer);
    } else {
      accumulator[offer.city.name] = [offer];
    }

    return accumulator;
  }, {});


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object
                  .keys(offersMap)
                  .map((city) => <FavoritesLocations key={city} city={city} offers={offersMap[city]}/>)
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
};


export default Favorites;

import React from 'react';
import {AppRoute} from '../../../constant';
import {Link} from 'react-router-dom';
import OffersList from './offers-list/offers-list';
import CityMap from './city-map/city-map';
import CitiesNavMenu from './cities-nav-menu/cities-nav-menu';
import FoundOffersTitle from './found-offers-title/found-offers-title';
import OffersSortForm from './offers-sort-form/offers-sort-form';


function Main() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesNavMenu />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <FoundOffersTitle />
              <OffersSortForm />
              <OffersList />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <CityMap />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Main;

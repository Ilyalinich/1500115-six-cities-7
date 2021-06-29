import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerFullProp} from '../../ui/offer/offer-prop';
import {Link} from 'react-router-dom';
import Header from '../../ui/header/header';
import FavoritesList from './favorites-list/favorites-list';


function Favorites({offers}) {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
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


const mapStateToProps = ({offers}) => ({
  offers: offers.filter((offer) => offer.isFavorite),
});


export {Favorites};
export default connect(mapStateToProps)(Favorites);

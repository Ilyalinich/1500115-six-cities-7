import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute} from '../../../constant';
import {offerFullProp} from '../../ui/offer/offer-prop';
import {Link} from 'react-router-dom';
import Header from '../../ui/header/header';
import FavoritesList from './favorites-list/favorites-list';
import EmptyFavoritesList from './empty-favorites-list/empty-favorites-list';


function Favorites({offers}) {
  const isOffersListEmpty = offers.length === 0;

  return (
    <div className={`page ${isOffersListEmpty && 'page--favorites-empty'}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isOffersListEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            isOffersListEmpty
              ? <EmptyFavoritesList />
              : <FavoritesList offers={offers}/>
          }
        </div>
      </main>
      <footer className={`footer ${!isOffersListEmpty && 'container'}`}>
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
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

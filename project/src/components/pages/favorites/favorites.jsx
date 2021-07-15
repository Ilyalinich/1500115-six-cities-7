import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppRoute} from '../../../constant';
import {Link} from 'react-router-dom';
import LoadingScreen from '../../ui/loading-screen/loading-screen';
import Header from '../../ui/header/header';
import FavoritesList from './favorites-list/favorites-list';
import EmptyFavoritesList from './empty-favorites-list/empty-favorites-list';
import {loadFavoriteOffers} from '../../../store/api-action';


function Favorites() {
  const [state, setState] = useState({
    offers: [],
    isOffersLoading: true,
  });
  const {offers, isOffersLoading} = state;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoriteOffers())
      .then((favOffers) => setState(
        {
          offers: favOffers,
          isOffersLoading: false,
        },
      ))
      .catch(() => setState(
        {
          offers: [],
          isOffersLoading: false,
        },
      ));
  }, [dispatch]);

  if (isOffersLoading) {
    return <LoadingScreen />;
  }

  const updateOffers = (updatedOffer) => setState((prevState) => {
    const index = prevState.offers.findIndex(({id}) => id === updatedOffer.id);

    return {
      ...prevState,
      offers: [
        ...prevState.offers.slice(0, index),
        ...prevState.offers.slice(index + 1),
      ],
    };
  });


  const isOffersListEmpty = offers.length === 0;

  return (
    <div className={`page ${isOffersListEmpty ? 'page--favorites-empty' : ''}`}>
      <Header />
      <main className={`page__main page__main--favorites ${isOffersListEmpty ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {
            isOffersListEmpty
              ? <EmptyFavoritesList />
              : <FavoritesList offers={offers} updateOffers={updateOffers}/>
          }
        </div>
      </main>
      <footer className={`footer ${!isOffersListEmpty ? 'container' : ''}`}>
        <Link className="footer__logo-link" to={AppRoute.ROOT}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}


export default Favorites;

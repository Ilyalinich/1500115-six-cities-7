import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../ui/offer/offer-prop';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../constant';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';


function App({offers}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites
            offers={offers.filter((offer) => offer.isFavorite)}
          />
        </Route>
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={(props) => {
            const offer = offers.find(({id}) => id.toString() === props.match.params.id);
            return <Room offer={offer}/>;
          }}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default App;

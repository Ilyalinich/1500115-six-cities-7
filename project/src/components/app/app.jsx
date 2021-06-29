import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Redirect, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constant';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../ui/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';


function App({authorizationStatus, isDataLoaded}) {
  const isCheckedAuthStatus = authorizationStatus !== AuthorizationStatus.UNKNOWN;

  if (!isCheckedAuthStatus || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={Main} />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={
            () => (authorizationStatus === AuthorizationStatus.NO_AUTH)
              ? <SignIn />
              : <Redirect to={AppRoute.ROOT} />
          }
        />
        <Route exact path={`${AppRoute.OFFER}/:id`} component={Room} />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          renderIfAuth={() => <Favorites />}
          renderIfNoAuth={() => <Redirect to={AppRoute.LOGIN} />}
        />
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  );
}


App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}) => ({
  authorizationStatus,
  isDataLoaded,
});


export {App};
export default connect(mapStateToProps)(App);

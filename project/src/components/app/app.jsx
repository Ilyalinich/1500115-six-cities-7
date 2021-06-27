import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constant';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../ui/loading-screen/loading-screen';


function App({authorizationStatus, isDataLoaded}) {
  const isCheckingAuthStatus = authorizationStatus === AuthorizationStatus.UNKNOWN;

  if (isCheckingAuthStatus || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={(props) => <Room pageId={props.match.params.id}/>}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}) => ({
  authorizationStatus,
  isDataLoaded,
});


export {App};
export default connect(mapStateToProps)(App);

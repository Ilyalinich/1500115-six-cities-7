import React from 'react';
import {useSelector} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../constant';
import {getAuthStatus} from '../../store/authorization/selectors';
import {getOffersLoadingStatus} from '../../store/data/selectors';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import Favorites from '../pages/favorites/favorites';
import Room from '../pages/room/room';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../ui/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';


function App() {
  const authorizationStatus = useSelector(getAuthStatus);
  const isOffersLoading = useSelector(getOffersLoadingStatus);

  const isCheckedAuthStatus = authorizationStatus !== AuthorizationStatus.UNKNOWN;

  if (!isCheckedAuthStatus || isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
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
      <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <Favorites />} />
      <Route exact path={AppRoute.NOT_FOUND} component={NotFoundScreen} />
      <Route component={NotFoundScreen} />
    </Switch>
  );
}


export default App;

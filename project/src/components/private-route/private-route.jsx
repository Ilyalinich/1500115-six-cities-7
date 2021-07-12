import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../constant';
import {getAuthStatus} from '../../store/authorization/selectors';


function PrivateRoute({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}


PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};


export default PrivateRoute;

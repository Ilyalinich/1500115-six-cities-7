import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../constant';


function PrivateRoute({renderIfAuth, renderIfNoAuth, path, exact, authorizationStatus}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? renderIfAuth(routeProps)
          : renderIfNoAuth(routeProps)
      )}
    />
  );
}

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  renderIfAuth: PropTypes.func.isRequired,
  renderIfNoAuth: PropTypes.func.isRequired,
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

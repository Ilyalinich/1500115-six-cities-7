import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../constant';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../../store/action';


function UserNav({authorizationStatus, avatar, email, logout}) {
  const isUserAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={isUserAuthorized ? AppRoute.FAVORITES : AppRoute.LOGIN}
          >
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={
                isUserAuthorized
                  ? ({
                    backgroundImage: `url(${avatar})`,
                    borderRadius: '10px',
                  })
                  : ({})
              }
            >
            </div>
            {
              isUserAuthorized
                ? <span className="header__user-name user__name">{email}</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isUserAuthorized && (
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#" onClick={logout}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}


UserNav.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  email: PropTypes.string,
  logout: PropTypes.func.isRequired,
};


const mapStateToProps = ({authorizationStatus, userInfo}) => ({
  authorizationStatus,
  avatar: userInfo.avatarUrl,
  email: userInfo.email,
});

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(ActionCreator.logout());
  },
});


export {UserNav};
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);

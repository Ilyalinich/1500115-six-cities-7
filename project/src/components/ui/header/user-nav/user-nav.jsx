import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../../constant';
import {getAuthStatus, getUserAvatar, getUserEmail} from '../../../../store/authorization/selectors';
import {logout} from '../../../../store/api-action';


function UserNav() {
  const authorizationStatus = useSelector(getAuthStatus);
  const userAvatar = useSelector(getUserAvatar);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

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
                    backgroundImage: `url(${userAvatar})`,
                    borderRadius: '10px',
                  })
                  : ({})
              }
            >
            </div>
            {
              isUserAuthorized
                ? <span className="header__user-name user__name">{userEmail}</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
        {
          isUserAuthorized && (
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#" onClick={() => dispatch(logout())}>
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  );
}


export default UserNav;

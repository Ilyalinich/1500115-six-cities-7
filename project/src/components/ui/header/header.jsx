import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../constant';
import UserNav from '../user-nav/user-nav';


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  );
}


export default Header;

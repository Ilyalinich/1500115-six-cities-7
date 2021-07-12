import React from 'react';
import {useSelector} from 'react-redux';
import CitiesNavMenu from '../cities-nav-menu/cities-nav-menu';
import ContentContainer from '../content-container/content-container';
import {getCurrentCityOffersCount} from '../../../../store/data/selectors';


function ContentBoard() {
  const offersCount = useSelector(getCurrentCityOffersCount);
  const isOffersListEmpty = offersCount === 0;

  return (
    <main className={`page__main page__main--index ${isOffersListEmpty ? 'page__main--index-empty' : ''}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesNavMenu />
      </div>
      <ContentContainer />
    </main>
  );
}


export default ContentBoard;

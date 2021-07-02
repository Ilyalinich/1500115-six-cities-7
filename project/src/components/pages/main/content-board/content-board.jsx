import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CitiesNavMenu from '../cities-nav-menu/cities-nav-menu';
import ContentContainer from '../content-container/content-container';


function ContentBoard({offersCount}) {
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


ContentBoard.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({currentCityOffers}) => ({
  offersCount: currentCityOffers.length,
});


export {ContentBoard};
export default connect(mapStateToProps)(ContentBoard);

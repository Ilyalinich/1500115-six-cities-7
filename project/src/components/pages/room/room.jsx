import {PropertyTypesMap, SINGULAR_NUMBER} from '../../../constant';
import {getRatingInPercents} from '../../../util/common';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../ui/header/header';
import OfferGallery from './offer-gallery/offer-gallery';
import ReviewsBoard from './reviews-board/reviews-board';
import Map from '../../ui/map/map';
import NeighboringList from './neighboring-list/neighboring-list';
import LoadingScreen from '../../ui/loading-screen/loading-screen';
import {getRoomPageData} from '../../../store/api-action';


const MAX_IMAGES_COUNT = 6;


function Room({match, loadPageData}) {
  const [pageData, setPageData] = useState(
    {
      currentOffer: {},
      neighboringOffers: [],
    },
  );

  const {currentOffer, neighboringOffers} = pageData;
  const offerId = match.params.id;


  useEffect(() => {
    loadPageData(offerId)
      .then(([offer, offers]) => setPageData(
        {
          currentOffer: offer,
          neighboringOffers: offers,
        },
      ));
  }, [loadPageData, offerId]);


  if (Object.keys(currentOffer).length === 0) {
    return <LoadingScreen />;
  }


  const {description, price, maxAdults, goods, host, rating, title, type, bedrooms, isFavorite, isPremium, images} = pageData.currentOffer;
  const imagesToRender = images.length > MAX_IMAGES_COUNT ? images.slice(0, MAX_IMAGES_COUNT) : images;
  const ratingInPercents = getRatingInPercents(rating);


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferGallery images={imagesToRender}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`${isFavorite ? 'property__bookmark-button--active' : ''} property__bookmark-button button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingInPercents}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {PropertyTypesMap[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} ${bedrooms === SINGULAR_NUMBER ? 'Bedroom' : 'Bedrooms'}`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} ${maxAdults === SINGULAR_NUMBER ? 'adult' : 'adults'}`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods
                      .map((good) => (
                        <li className="property__inside-item" key={good}>
                          {good}
                        </li>
                      ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsBoard offerId={offerId}/>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={
                neighboringOffers ? [...neighboringOffers, currentOffer] : [currentOffer]
              }
              activeOfferId={currentOffer.id}
              initialPosition={currentOffer.location}
            />
          </section>
        </section>
        <div className="container">
          <NeighboringList offers={neighboringOffers}/>
        </div>
      </main>
    </div>
  );
}


Room.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  loadPageData: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  loadPageData(currentOfferId) {
    return dispatch(getRoomPageData(currentOfferId));
  },
});


export {Room};
export default connect(null, mapDispatchToProps)(Room);

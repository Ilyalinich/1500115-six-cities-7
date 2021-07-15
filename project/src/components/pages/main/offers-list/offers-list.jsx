import React from 'react';
import {SortType} from '../../../../constant';
import {useSelector, useDispatch} from 'react-redux';
import CityOffer from '../city-offer/city-offer';
import {changeActiveOfferId, restActiveOfferId} from '../../../../store/action';
import {getCurrentCityOffers} from '../../../../store/data/selectors';
import {getCurrentSortType} from '../../../../store/operation-process/selectors';


const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

    case SortType.TOP_RATED_FIRST:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

    default:
      return offers;
  }
};


function OffersList() {
  const currentCityoffers = useSelector(getCurrentCityOffers);
  const currentSortType = useSelector(getCurrentSortType);

  const sortedOffers = sortOffers(currentCityoffers, currentSortType);
  const dispatch = useDispatch();

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        sortedOffers.map((offer) => (
          <CityOffer
            key={offer.id.toString()}
            id={offer.id}
            price={offer.price}
            rating={offer.rating}
            title={offer.title}
            type={offer.type}
            previewImage={offer.previewImage}
            isFavorite={offer.isFavorite}
            isPremium={offer.isPremium}
            onMouseEnter={() => dispatch(changeActiveOfferId(offer.id))}
            onMouseLeave={() => dispatch(restActiveOfferId())}
          />
        ))
      }
    </div>
  );
}


export default OffersList;

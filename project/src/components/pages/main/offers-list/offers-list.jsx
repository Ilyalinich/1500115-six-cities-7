import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';


function OffersList({offers, onListItemHover}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <Offer
            key={offer.id.toString()}
            id={offer.id}
            price={offer.price}
            rating={offer.rating}
            title={offer.title}
            type={offer.type}
            previewImage={offer.previewImage}
            isFavorite={offer.isFavorite}
            isPremium={offer.isPremium}
            onMouseEnter={() => onListItemHover(offer.id)}
          />
        ))
      }
    </div>
  );
}


OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
  onListItemHover: PropTypes.func.isRequired,
};


export default OffersList;

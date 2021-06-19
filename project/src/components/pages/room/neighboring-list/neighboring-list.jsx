import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import NeighboringOffer from '../neighboring-offer/neighboring-offer';


function NeighboringList({offers}) {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => (
          <NeighboringOffer
            key={offer.id.toString()}
            id={offer.id}
            price={offer.price}
            rating={offer.rating}
            title={offer.title}
            type={offer.type}
            previewImage={offer.previewImage}
            isFavorite={offer.isFavorite}
            isPremium={offer.isPremium}
          />
        ))
      }
    </div>
  );
}


NeighboringList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
};


export default NeighboringList;

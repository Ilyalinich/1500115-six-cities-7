import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import NeighboringOffer from '../neighboring-offer/neighboring-offer';


function NeighboringList({offers}) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers
            ? (
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
            )
            : <span style={{color: 'red'}}>Other places loading error, please try again later...</span>
        }
      </div>
    </section>
  );
}


NeighboringList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(offerFullProp),
  ),
};


export default NeighboringList;

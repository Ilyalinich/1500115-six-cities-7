import React from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../../../ui/offer/offer-prop';
import {connect} from 'react-redux';
import CityOffer from '../city-offer/city-offer';
import {ActionCreator} from '../../../../store/action';


function OffersList({offers, onListItemHover, onListItemHoverLost}) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
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
            onMouseEnter={() => onListItemHover(offer.id)}
            onMouseLeave={() => onListItemHoverLost()}
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
  onListItemHoverLost: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  offers: state.sortedCityOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onListItemHover(offerId) {
    dispatch(ActionCreator.changeActiveOfferId(offerId));
  },
  onListItemHoverLost() {
    dispatch(ActionCreator.restActiveOfferId());
  },
});


export {OffersList};
export default connect(mapStateToProps, mapDispatchToProps)(OffersList);

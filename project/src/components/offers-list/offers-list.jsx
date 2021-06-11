import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {offerFullProp} from '../offer/offer-prop';
import Offer from '../offer/offer';


function OffersList({offers}) {
  const [activeOfferId, setActiveOfferId] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <Offer
            key={offer.id.toString()}
            offer={offer}
            onMouseEnter={({target}) => setActiveOfferId(target.offsetParent.id)}
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
};


export default OffersList;

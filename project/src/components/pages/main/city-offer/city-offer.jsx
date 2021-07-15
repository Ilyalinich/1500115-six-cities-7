import React from 'react';
import PropTypes from 'prop-types';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';


const SpecialClassName = {
  CARD_CLASS: 'cities__place-card',
  IMAGE_WRAPPER_CLASS: 'cities__image-wrapper',
};


function CityOffer(props) {
  return (
    <Offer
      cardClassName={SpecialClassName.CARD_CLASS}
      imageWrapperClassName={SpecialClassName.IMAGE_WRAPPER_CLASS}
      {...props}
    />
  );
}


CityOffer.propTypes = {
  ...offerBasicProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default CityOffer;

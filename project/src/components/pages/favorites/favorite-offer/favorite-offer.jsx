import React from 'react';
import PropTypes from 'prop-types';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';


const SpecialClassName = {
  CARD_CLASS: 'favorites__card',
  IMAGE_WRAPPER_CLASS: 'favorites__image-wrapper',
  CARD_INFO_CLASS: 'favorites__card-info',
};

const SpecialImageSize = {
  WIDTH: 150,
  HEIGTH: 110,
};


function FavoriteOffer(props) {
  return (
    <Offer
      cardClassName={SpecialClassName.CARD_CLASS}
      imageWrapperClassName={SpecialClassName.IMAGE_WRAPPER_CLASS}
      cardInfoClassName={SpecialClassName.CARD_INFO_CLASS}
      imageWidth={SpecialImageSize.WIDTH}
      imageHeigth={SpecialImageSize.HEIGTH}
      {...props}
    />
  );
}


FavoriteOffer.propTypes = {
  ...offerBasicProp,
  onFavoriteStatusChange: PropTypes.func.isRequired,
};


export default FavoriteOffer;

import React from 'react';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';


const SpecialClassName = {
  CARD_CLASS: 'near-places__card',
  IMAGE_WRAPPER_CLASS: 'near-places__image-wrapper',
};


function NeighboringOffer(props) {
  return (
    <Offer
      cardClassName={SpecialClassName.CARD_CLASS}
      imageWrapperClassName={SpecialClassName.IMAGE_WRAPPER_CLASS}
      {...props}
    />
  );
}


NeighboringOffer.propTypes = offerBasicProp;

export default NeighboringOffer;

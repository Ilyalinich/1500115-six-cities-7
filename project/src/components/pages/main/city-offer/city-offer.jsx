import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';
import {updateFavoriteStatus} from '../../../../store/api-action';


const SpecialClassName = {
  CARD_CLASS: 'cities__place-card',
  IMAGE_WRAPPER_CLASS: 'cities__image-wrapper',
};


function CityOffer(props) {
  const {id, isFavorite} = props;

  const dispatch = useDispatch();

  const favButtonClickHandler = (evt) => {
    evt.preventDefault();

    dispatch(updateFavoriteStatus(id, Number(!isFavorite)));
  };

  return (
    <Offer
      cardClassName={SpecialClassName.CARD_CLASS}
      imageWrapperClassName={SpecialClassName.IMAGE_WRAPPER_CLASS}
      favButtonClickHandler={favButtonClickHandler}
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

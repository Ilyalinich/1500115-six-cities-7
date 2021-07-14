import React from 'react';
import {useDispatch} from 'react-redux';
import {offerBasicProp} from '../../../ui/offer/offer-prop';
import Offer from '../../../ui/offer/offer';
import {updateFavoriteStatus} from '../../../../store/api-action';


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
  const {id, isFavorite, listUpdateHandler} = props;

  const dispatch = useDispatch();

  const favButtonClickHandler = (evt) => {
    evt.preventDefault();

    dispatch(updateFavoriteStatus(id, Number(!isFavorite)))
      .then(({payload}) => listUpdateHandler(payload));
  };

  return (
    <Offer
      cardClassName={SpecialClassName.CARD_CLASS}
      imageWrapperClassName={SpecialClassName.IMAGE_WRAPPER_CLASS}
      cardInfoClassName={SpecialClassName.CARD_INFO_CLASS}
      imageWidth={SpecialImageSize.WIDTH}
      imageHeigth={SpecialImageSize.HEIGTH}
      favButtonClickHandler={favButtonClickHandler}
      {...props}
    />
  );
}


FavoriteOffer.propTypes = offerBasicProp;


export default FavoriteOffer;

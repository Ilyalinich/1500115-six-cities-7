import React from 'react';
import PropTypes from 'prop-types';
import OfferImage from '../offer-image/offer-image';


function OfferGallery({images}) {
  return (
    <div className="property__gallery">
      {images.map((imageSrc) => <OfferImage key={imageSrc} imageSrc={imageSrc}/>)}
    </div>
  );
}

OfferGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default OfferGallery;

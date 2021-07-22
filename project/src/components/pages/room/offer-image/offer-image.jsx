import React from 'react';
import PropTypes from 'prop-types';


function OfferImage({imageSrc}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={imageSrc} alt="" data-testid="offer image"/>
    </div>
  );
}

OfferImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};


export default OfferImage;

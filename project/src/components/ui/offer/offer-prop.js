import PropTypes from 'prop-types';


const offerBasicProp = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  city: PropTypes.shape(
    {
      location: PropTypes.objectOf(PropTypes.number.isRequired),
      name: PropTypes.string.isRequired,
    },
  ),
};

const offerFullProp = {
  ...offerBasicProp,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  description: PropTypes.stringisRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.number.isRequired),
  host: PropTypes.shape(
    {
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    },
  ),
};


export {offerBasicProp, offerFullProp};

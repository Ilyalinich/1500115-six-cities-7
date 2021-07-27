import PropTypes from 'prop-types';


export const offerBasicProp = {
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

const MAX_RATING_VALUE = 5;
const FULL_PERCENTS_VALUE = 100;


const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    host: {
      avatarUrl: offer.host.avatar_url,
      id: offer.host.id,
      isPro: offer.host.is_pro,
      name: offer.host.name,
    },
  };

  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;

  return adaptedOffer;
};

const getRatingInPercents = (rating) => Math.round(rating)/MAX_RATING_VALUE*FULL_PERCENTS_VALUE;


export {adaptOfferToClient, getRatingInPercents};

import {ReducerType} from '../root-reducer';

// const sortOffers = (offers, sortType) => {
//   switch (sortType) {
//     case SortType.PRICE_LOW_TO_HIGH:
//       return offers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

//     case SortType.PRICE_HIGH_TO_LOW:
//       return offers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

//     case SortType.TOP_RATED_FIRST:
//       return offers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

//     default:
//       return offers;
//   }
// };


export const getCurrentCityOffers = (state) => state[ReducerType.DATA].offers
  .filter(({city}) => city.name === state[ReducerType.OPERATION].currentCity);

export const getCurrentCityOffersCount = (state) => state[ReducerType.DATA].offers
  .filter(({city}) => city.name === state[ReducerType.OPERATION].currentCity).length;

// export const getSortedCityOffers = (state) => state[ReducerType.DATA].offers
//   .filter(({city}) => city.name === state.currentCity).sortOffers();

export const getFavoriteOffers = (state) => state[ReducerType.DATA].offers
  .filter((offer) => offer.isFavorite);

export const getDataLoadStatus = (state) => state[ReducerType.DATA].isDataLoaded;

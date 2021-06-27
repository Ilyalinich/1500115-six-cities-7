import {ActionType} from './action';
import {CITIES, SortType, AuthorizationStatus} from '../constant';


const sortCityOffers = (cityOffers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return cityOffers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

    case SortType.PRICE_HIGH_TO_LOW:
      return cityOffers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

    case SortType.TOP_RATED_FIRST:
      return cityOffers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

    default:
      return cityOffers;
  }
};


const initialState ={
  currentCity: CITIES[0],
  currentCityOffers: [],
  sortedCityOffers: [],
  currentSortType: SortType.POPULAR,
  offers: [],
  activeOfferId: 0,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authInfo: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentCityOffers: state.offers.filter(({city}) => city.name === action.payload),
        sortedCityOffers: state.offers.filter(({city}) => city.name === action.payload),
        currentSortType: initialState.currentSortType,
      };

    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: action.payload,
      };

    case ActionType.REST_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: initialState.activeOfferId,
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
        sortedCityOffers: sortCityOffers(state.currentCityOffers, action.payload),
      };

    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentCityOffers: action.payload.filter(({city}) => city.name === initialState.currentCity),
        sortedCityOffers: action.payload.filter(({city}) => city.name === initialState.currentCity),
        isDataLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    default:
      return state;
  }
};


export {reducer};

import {ActionType} from './action';
import {CITIES, SortType} from '../constant';
import {OFFERS} from '../mocks/offers';
import {adaptOfferToClient} from '../util/adapter';


const offers = OFFERS.map((offer) => adaptOfferToClient(offer));


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

const defaultCityOffers = offers.filter(({city}) => city.name === CITIES[0]);

const initialState ={
  currentCity: CITIES[0],
  currentCityOffers: defaultCityOffers,
  sortedCityOffers: defaultCityOffers,
  currentSortType: SortType.POPULAR,
  offers,
  activeOfferId: 0,
};
// подумать над названиями действий

const reducer = (state = initialState, action) => {
  const currentCityOffers = offers.filter(({city}) => city.name === action.payload);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
        currentCityOffers: currentCityOffers,
        sortedCityOffers: currentCityOffers,
        currentSortType: initialState.currentSortType,
        activeOfferId: initialState.activeOfferId,
      };
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {
        ...state,
        activeOfferId: action.payload,
      };
    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        currentSortType: action.payload,
        sortedCityOffers: sortCityOffers(state.currentCityOffers, action.payload),
      };
    // case ActionType.SET_OFFERS:
    //   return {
    //     ...state,
    //     offers: action.payload,
    //   };
    default:
      return state;
  }
};


export {reducer};

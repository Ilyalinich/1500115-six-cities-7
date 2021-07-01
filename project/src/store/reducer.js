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
  userInfo: {},
  roomPageData: {
    isRoomPageDataLoaded: false,
    currentOffer: {
      id: 0,
      description: '',
      price: 0,
      maxAdults: 0,
      goods: [],
      rating: 0,
      title: '',
      type: '',
      bedrooms: 0,
      isFavorite: false,
      isPremium: false,
      images: [],
      previewImage: '',
      city: {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        },
        name: '',
      },
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      host: {
        avatarUrl: '',
        id: 0,
        isPro: true,
        name: '',
      },
    },
    reviews: [],
    neighboringOffers: [],
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      const currentCityOffers = state.offers.filter(({city}) => city.name === action.payload);

      return {
        ...state,
        currentCity: action.payload,
        currentCityOffers,
        sortedCityOffers: currentCityOffers,
        currentSortType: initialState.currentSortType,
      };
    }

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

    case ActionType.SET_OFFERS: {
      const currentCityOffers = action.payload.filter(({city}) => city.name === initialState.currentCity);

      return {
        ...state,
        offers: action.payload,
        currentCityOffers,
        sortedCityOffers: currentCityOffers,
        isDataLoaded: true,
      };
    }

    case ActionType.SET_OFFER: {
      return {
        ...state,
        roomPageData: {
          ...state.roomPageData,
          currentOffer: action.payload,
          isRoomPageDataLoaded: true,
        },
      };
    }

    case ActionType.SET_REVIEWS: {
      return {
        ...state,
        roomPageData: {
          ...state.roomPageData,
          reviews: action.payload,
          isRoomPageDataLoaded: true,
        },
      };
    }

    case ActionType.SET_NEIGHBORING_OFFERS: {
      return {
        ...state,
        roomPageData: {
          ...state.roomPageData,
          neighboringOffers: action.payload,
        },
      };
    }

    case ActionType.LOGIN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: initialState.userInfo,
      };

    default:
      return state;
  }
};


export {reducer};

import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeActiveOfferId, restActiveOfferId, changeSortType} from '../action';
import {SortType, CITIES} from '../../constant';


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


const initialState = {
  currentCity: CITIES[0],
  // currentCityOffers: [],
  // sortedCityOffers: [],
  currentSortType: SortType.POPULAR,
  activeOfferId: 0,

};

const operationProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      // const currentCityOffers = state.offers.filter(({city}) => city.name === action.payload);

      state.currentCity = action.payload;
      state.currentSortType = initialState.currentSortType;
      // state.currentCityOffers = currentCityOffers;
      // state.sortedCityOffers = currentCityOffers;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(restActiveOfferId, (state, action) => {
      state.activeOfferId = initialState.activeOfferId;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
      // state.sortedCityOffers = sortOffers(state.currentCityOffers, action.payload);
    });
});


export {operationProcess};


// const operationProcess = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.CHANGE_CITY: {
//       const currentCityOffers = state.offers.filter(({city}) => city.name === action.payload);

//       return {
//         ...state,
//         currentCity: action.payload,
//         currentCityOffers,
//         sortedCityOffers: currentCityOffers,
//         currentSortType: initialState.currentSortType,
//       };
//     }

//     case ActionType.CHANGE_ACTIVE_OFFER_ID:
//       return {
//         ...state,
//         activeOfferId: action.payload,
//       };

//     case ActionType.REST_ACTIVE_OFFER_ID:
//       return {
//         ...state,
//         activeOfferId: initialState.activeOfferId,
//       };

//     case ActionType.CHANGE_SORT_TYPE:
//       return {
//         ...state,
//         currentSortType: action.payload,
//         sortedCityOffers: sortOffers(state.currentCityOffers, action.payload),
//       };

//     default:
//       return state;
//   }
// };

import {createReducer} from '@reduxjs/toolkit';
import {setOffers} from '../action';
// import {CITIES} from '../../constant';


const initialState = {
  offers: [],
  isDataLoaded: false,

};
// подумать над тем, чтобы оставить в этом редьюсере только offers, isDataLoaded. Если перенсти это в operation, то фильтрация
// в currentCityOffers не выполнится, так как там нет доступа к offers в initialState

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      // const currentCityOffers = action.payload.filter(({city}) => city.name === initialState.currentCity);

      state.offers = action.payload;
      state.isDataLoaded = true;
      // state.currentCityOffers = currentCityOffers;
      // state.sortedCityOffers = currentCityOffers;
    });
});


export {data};


// const data = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.SET_OFFERS: {
//       const currentCityOffers = action.payload.filter(({city}) => city.name === initialState.currentCity);

//       return {
//         ...state,
//         offers: action.payload,
//         currentCityOffers,
//         sortedCityOffers: currentCityOffers,
//         isDataLoaded: true,
//       };
//     }

//     default:
//       return state;
//   }
// };

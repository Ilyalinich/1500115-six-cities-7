import {createReducer} from '@reduxjs/toolkit';
import {setOffers} from '../action';


const initialState = {
  offers: [],
  isDataLoaded: false,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});


export {data};

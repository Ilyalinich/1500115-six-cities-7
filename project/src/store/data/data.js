import {createReducer} from '@reduxjs/toolkit';
import {setOffers, updateOffers, deauthorize} from '../action';


const initialState = {
  offers: [],
  isOffersLoading: true,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(updateOffers, (state, action) => {
      const index = state.offers.findIndex(({id}) => id === action.payload.id);

      state.offers = [
        ...state.offers.slice(0, index),
        action.payload,
        ...state.offers.slice(index + 1),
      ];
    })
    .addCase(deauthorize, (state) => {
      // const resetedOffers = state.offers.map((offer) => (
      //   {...offer,
      //     isFavorite: false,
      //   }));

      // state.offers = resetedOffers;

      state.offers.forEach((offer) => (offer.isFavorite) && (offer.isFavorite = false));
    });
});


export {data};

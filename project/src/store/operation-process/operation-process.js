import {createReducer} from '@reduxjs/toolkit';
import {SortType, CITIES} from '../../constant';
import {changeCity, changeActiveOfferId, restActiveOfferId, changeSortType} from '../action';


const initialState = {
  currentCity: CITIES[0],
  currentSortType: SortType.POPULAR,
  activeOfferId: 0,
};

const operationProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
      state.currentSortType = initialState.currentSortType;
    })
    .addCase(changeActiveOfferId, (state, action) => {
      state.activeOfferId = action.payload;
    })
    .addCase(restActiveOfferId, (state) => {
      state.activeOfferId = initialState.activeOfferId;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    });
});


export {operationProcess};

import {ReducerType} from '../root-reducer';

export const getCurrentCity = (state) => state[ReducerType.OPERATION].currentCity;
export const getCurrentSortType = (state) => state[ReducerType.OPERATION].currentSortType;
export const getActiveOfferId = (state) => state[ReducerType.OPERATION].activeOfferId;

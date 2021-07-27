import {createSelector} from 'reselect';
import {ReducerType} from '../root-reducer';


const getOffers = (state) => state[ReducerType.DATA].offers;
const getCurrentCity = (state) => state[ReducerType.OPERATION].currentCity;


export const getCurrentCityOffers = createSelector(getCurrentCity, getOffers, (currentCity, offers) =>
  offers.filter(({city}) => city.name === currentCity),
);

export const getCurrentCityOffersCount = createSelector(getCurrentCityOffers, (offers) => offers.length);

export const getOffersLoadingStatus = (state) => state[ReducerType.DATA].isOffersLoading;

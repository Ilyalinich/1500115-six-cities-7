import {ReducerType} from '../root-reducer';

export const getCurrentCity = (state) => {
  console.log('срабатывает селектор');

  return state[ReducerType.OPERATION].currentCity;
};
// export const getCurrentCityOffers = (state) => state[ReducerType.OPERATION].currentCityOffers;
// export const getCurrentCityOffersCount = (state) => state[ReducerType.DATA].currentCityOffers.length;
// подумать о использовании resellect для обработки результата из хранилища (см задание)
// export const getSortedCityOffers = (state) => state[ReducerType.OPERATION].sortedCityOffers;
export const getCurrentSortType = (state) => state[ReducerType.OPERATION].currentSortType;
export const getActiveOfferId = (state) => state[ReducerType.OPERATION].activeOfferId;

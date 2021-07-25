import {CITIES, SortType} from '../../constant';
import {changeCity, changeActiveOfferId, restActiveOfferId, changeSortType} from '../action';
import {operationProcess} from './operation-process';


const initialState = {
  currentCity: CITIES[0],
  currentSortType: SortType.POPULAR,
  activeOfferId: 0,
};

const state = {
  currentCity: 'prevCityName',
  currentSortType: 'prevSortType',
  activeOfferId: 'prevId',
};


describe('Reducer: operationProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(operationProcess(undefined, {}))
      .toEqual(initialState);
  });

  it('should change currentCity by a given value and rest currentSortType to initial value', () => {
    const city = 'cityName';

    expect(operationProcess(state, changeCity(city)))
      .toEqual({
        currentCity: 'cityName',
        currentSortType: initialState.currentSortType,
        activeOfferId: 'prevId',
      });
  });

  it('should change only active offer id by a given value', () => {
    const id = 'id';

    expect(operationProcess(state, changeActiveOfferId(id)))
      .toEqual({
        currentCity: 'prevCityName',
        currentSortType: 'prevSortType',
        activeOfferId: 'id',
      });
  });

  it('should rest active offer id to initial value', () => {
    expect(operationProcess(state, restActiveOfferId()))
      .toEqual({
        currentCity: 'prevCityName',
        currentSortType: 'prevSortType',
        activeOfferId: initialState.activeOfferId,
      });
  });

  it('should change only sort type by a given value', () => {
    const sortType = 'newSortType';

    expect(operationProcess(state, changeSortType(sortType)))
      .toEqual({
        currentCity: 'prevCityName',
        currentSortType: sortType,
        activeOfferId: 'prevId',
      });
  });
});

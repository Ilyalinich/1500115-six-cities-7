import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as Redux from 'react-redux';
import OffersSortForm from './offers-sort-form';
import {ReducerType} from '../../../../store/root-reducer';
import {ActionType} from '../../../../store/action';
import {SortType} from '../../../../constant';


let store = null;
let history = null;
let fakeSortType = null;


describe('Component: OffersSortForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    fakeSortType = SortType.POPULAR;

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentSortType: fakeSortType,
      },
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersSortForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(screen.getByTestId('current sort type frame')).toHaveTextContent(fakeSortType);
  });

  it('should make a correct onClick call to change currentSortType in Store', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersSortForm />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(new RegExp(`${SortType.PRICE_HIGH_TO_LOW}`, 'i'))).toBeInTheDocument();

    userEvent.click(screen.getByText(new RegExp(`${SortType.PRICE_HIGH_TO_LOW}`, 'i')));

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortType.PRICE_HIGH_TO_LOW,
    });
  });
});

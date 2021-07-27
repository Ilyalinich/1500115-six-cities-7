import React from 'react';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {SortType} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';
import {ActionType} from '../../../../store/action';
import OffersSortForm from './offers-sort-form';


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

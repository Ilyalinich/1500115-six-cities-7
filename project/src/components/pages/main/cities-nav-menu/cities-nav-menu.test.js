import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import * as Redux from 'react-redux';
import CitiesNavMenu from './cities-nav-menu';
import {ReducerType} from '../../../../store/root-reducer';
import {CITIES} from '../../../../constant';
import {ActionType} from '../../../../store/action';


let store = null;
let history = null;


describe('Component: CitiesNavMenu', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
      },
    });
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesNavMenu />
        </Router>
      </Provider>,
    );

    CITIES.forEach((city) => expect(screen.getByText(new RegExp(`${city}`, 'i'))).toBeInTheDocument());
  });

  it('should make a correct onClick call to change currentCity in Store', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesNavMenu />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByText(new RegExp(`${CITIES[1]}`, 'i')));

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    });
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FoundOffersTitle from './found-offers-title';
import {ReducerType} from '../../../../store/root-reducer';
import {CITIES, SINGULAR_NUMBER} from '../../../../constant';

describe('Component: FoundOffersTitle', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeState = {
      [ReducerType.DATA]: {
        offers: [
          {city: {
            name: CITIES[0],
          }},
          {city: {
            name: CITIES[0],
          }},
          {city: {
            name: CITIES[0],
          }},
        ],
      },
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
      },
    };

    const offersCount = fakeState[ReducerType.DATA].offers.length;

    const createFakeStore = configureStore({});
    const store = createFakeStore(fakeState);

    render(
      <Provider store={store}>
        <Router history={history}>
          <FoundOffersTitle />
        </Router>
      </Provider>,
    );


    expect(screen.getByText(new RegExp(`${offersCount} ${offersCount === SINGULAR_NUMBER ? 'place' : 'places'} to stay in ${CITIES[0]}`, 'i'))).toBeInTheDocument();
  });
});

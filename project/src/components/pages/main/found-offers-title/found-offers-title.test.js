import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {CITIES, SINGULAR_NUMBER} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';
import FoundOffersTitle from './found-offers-title';

describe('Component: FoundOffersTitle', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeCityName = CITIES[0];

    const fakeState = {
      [ReducerType.DATA]: {
        offers: [
          {city: {
            name: fakeCityName,
          }},
          {city: {
            name: fakeCityName,
          }},
          {city: {
            name: fakeCityName,
          }},
        ],
      },
      [ReducerType.OPERATION]: {
        currentCity: fakeCityName,
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

    expect(screen.getByText(new RegExp(`${offersCount} ${offersCount === SINGULAR_NUMBER ? 'place' : 'places'} to stay in ${fakeCityName}`, 'i'))).toBeInTheDocument();
  });
});

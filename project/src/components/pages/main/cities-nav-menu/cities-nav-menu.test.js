import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import CitiesNavMenu from './cities-nav-menu';
import {ReducerType} from '../../../../store/root-reducer';
import {CITIES} from '../../../../constant';


describe('Component: CitiesNavMenu', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesNavMenu />
        </Router>
      </Provider>,
    );


    CITIES.forEach((city) => expect(screen.getByText(new RegExp(`${city}`, 'i'))).toBeInTheDocument());
  });
});

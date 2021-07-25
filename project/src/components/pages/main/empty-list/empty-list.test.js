import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import EmptyList from './empty-list';
import {ReducerType} from '../../../../store/root-reducer';
import {CITIES} from '../../../../constant';


describe('Component: EmptyList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeCityName = CITIES[0];

    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: fakeCityName,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <EmptyList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${fakeCityName}`, 'i'))).toBeInTheDocument();
  });
});

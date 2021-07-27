import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {CITIES} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';
import EmptyList from './empty-list';


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

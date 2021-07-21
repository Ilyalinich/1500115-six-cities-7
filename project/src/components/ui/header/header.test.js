import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Header from './header';
import {ReducerType} from '../../../store/root-reducer';


describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeState = {
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: 'AUTH',
        userInfo: {
          avatarUrl: '',
          email: 'noname@mail.ru',
        },
      },
    };


    const createFakeStore = configureStore({});
    const store = createFakeStore(fakeState);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/noname@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});

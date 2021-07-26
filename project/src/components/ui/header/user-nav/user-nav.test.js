import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserNav from './user-nav';
import {ReducerType} from '../../../../store/root-reducer';
import {AuthorizationStatus} from '../../../../constant';


let history = null;


describe('Component: UserNav', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly when use authorized', () => {
    const createFakeStore = configureStore({});
    const fakeEmail = 'noname@mail.ru';

    const store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatarUrl: '',
          email: fakeEmail,
        },
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserNav />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(new RegExp(`${fakeEmail}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
  });

  it('should render correctly when use not authorized', () => {
    const createFakeStore = configureStore({});
    const fakeEmail = 'noname@mail.ru';

    const store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: {
          avatarUrl: '',
          email: fakeEmail,
        },
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserNav />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(new RegExp(`${fakeEmail}`, 'i'))).not.toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
  });
});

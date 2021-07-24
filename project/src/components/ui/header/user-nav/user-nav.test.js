import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserNav from './user-nav';
import {ReducerType} from '../../../../store/root-reducer';
import {AuthorizationStatus} from '../../../../constant';


describe('Component: UserNav', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeEmail = 'noname@mail.ru';

    const fakeState = {
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatarUrl: '',
          email: fakeEmail,
        },
      },
    };


    const createFakeStore = configureStore({});
    const store = createFakeStore(fakeState);

    render(
      <Provider store={store}>
        <Router history={history}>
          <UserNav />
        </Router>
      </Provider>,
    );


    expect(screen.getByText(new RegExp(`${fakeEmail}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});

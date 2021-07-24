import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignIn from './sign-in';
import {AppRoute} from '../../../constant';


describe('Component: SignIn', () => {
  it('should render "SignIn page" when user navigate to "/login" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    const fakeState = {
      AUTHORIZATION: {
        authorizationStatus: 'NO_AUTH',
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
          <SignIn />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('form title')).toHaveTextContent('Sign in');
    expect(screen.getByTestId('submit button')).toHaveTextContent('Sign in');
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();

    userEvent.type(screen.getByTestId('email'), 'user');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue(/user/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123456/i)).toBeInTheDocument();
  });
});

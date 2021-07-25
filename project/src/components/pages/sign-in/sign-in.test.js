import React from 'react';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import {AppRoute, AuthorizationStatus} from '../../../constant';
import {ReducerType} from '../../../store/root-reducer';
import SignIn from './sign-in';


let history = null;
let store = null;
let fakeState = null;


describe('Component: SignIn', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    history.push(AppRoute.LOGIN);

    fakeState = {
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatarUrl: '',
          email: 'noname@mail.ru',
        },
      },
    };

    const createFakeStore = configureStore({});
    store = createFakeStore(fakeState);
  });

  it('should render "SignIn page" when user navigate to "/login" url', () => {
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

  it('should should make a correct API call to POST /login when user clicked to submit button', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignIn />
        </Router>
      </Provider>,
    );

    userEvent.click(screen.getByTestId('submit button'));

    expect(dispatch).toBeCalledTimes(1);
  });
});

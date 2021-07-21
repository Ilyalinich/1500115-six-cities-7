import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import NotFoundScreen from './not-found-screen';
import {AppRoute} from '../../../constant';


const mockStore = configureStore({});

describe('Component: NotFoundScreen', () => {
  it('should render "NotFoundScreen page" when user navigate to "/not found" or non-existent route', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.NOT_FOUND);

    const fakeState = {
      AUTHORIZATION: {
        authorizationStatus: 'NO_AUTH',
        userInfo: {
          avatarUrl: '',
          email: 'noname@mail.ru',
        },
      },
    };


    render(
      <Provider store={mockStore(fakeState)}>
        <Router history={history}>
          <NotFoundScreen />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('We could not find the page with the specified address')).toBeInTheDocument();
    expect(screen.getByText('Return to the main page')).toBeInTheDocument();
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import UserNav from './user-nav';
import {ReducerType} from '../../../../store/root-reducer';
// import {SortType} from '../../../../constant';


describe('Component: UserNav', () => {
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
          <UserNav />
        </Router>
      </Provider>,
    );


    expect(screen.getByText(/noname@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});

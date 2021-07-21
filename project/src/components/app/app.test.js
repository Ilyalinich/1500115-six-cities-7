import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus, AppRoute, CITIES, SortType} from '../../constant';
import {ReducerType} from '../../store/root-reducer';
import App from './app';


let history = null;
let store = null;
let fakeApp = null;


describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo: {
          avatarUrl: '',
          email: '',
        },
      },
      [ReducerType.DATA]: {
        offers: [],
        isOffersLoading: false,
      },
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
        currentSortType: SortType.POPULAR,
        activeOfferId: 0,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Main page" when user navigate to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${CITIES[0]}`, 'i'))).toBeInTheDocument();
  });

  it('should redirect to "Main page" when user navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`We could not find any property available at the moment in ${CITIES[0]}`, 'i'))).toBeInTheDocument();
  });

  // it('should render "Favorites page" when user navigate to "/favorites"', () => {
  //   history.push(AppRoute.FAVORITES);
  //   render(fakeApp);

  //   expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  //   expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  // });

  // it('should render "Room page" when user navigate to "/offer/:id"', () => {
  //   const fakeId = '1';
  //   history.push(`${AppRoute.OFFER}/${fakeId}`);
  //   render(fakeApp);

  //   expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  // });

  it('should render "NotFoundScreen" when user navigate to "/not found" or non-existent route', () => {
    history.push(AppRoute.NOT_FOUND);
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('We could not find the page with the specified address')).toBeInTheDocument();
    expect(screen.getByText('Return to the main page')).toBeInTheDocument();
  });
});

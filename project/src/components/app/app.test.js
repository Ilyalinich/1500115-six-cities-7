import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus, AppRoute} from '../../constant';
import {ReducerType} from '../../store/root-reducer';
import App from './app';


let history = null;
let store = null;
let fakeApp = null;


const fakeMainComponent = () => (<p>Correct render of Main component</p>);
jest.mock('../pages/main/main', () => fakeMainComponent);

const fakeFavoritesComponent = () => (<p>Correct render of Favorites component</p>);
jest.mock('../pages/favorites/favorites', () => fakeFavoritesComponent);

const fakeRoomComponent = () => (<p>Correct render of Room component</p>);
jest.mock('../pages/room/room', () => fakeRoomComponent);

const fakeSignInComponent = () => (<p>Correct render of SignIn component</p>);
jest.mock('../pages/sign-in/sign-in', () => fakeSignInComponent);

const fakeNotFoundComponent = () => (<p>Correct render of NotFoundScreen component</p>);
jest.mock('../pages/not-found-screen/not-found-screen', () => fakeNotFoundComponent);


describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      [ReducerType.DATA]: {
        isOffersLoading: false,
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

    expect(screen.getByText(/Correct render of Main component/i)).toBeInTheDocument();
  });

  it('should redirect to "Main page" when user is authorized and navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByText(/Correct render of Main component/i)).toBeInTheDocument();
  });

  it('should render "Favorites page" when user navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/Correct render of Favorites component/i)).toBeInTheDocument();
  });

  it('should render "Room page" when user navigate to "/offer/:id"', () => {
    const fakeId = '1';
    history.push(`${AppRoute.OFFER}/${fakeId}`);
    render(fakeApp);

    expect(screen.getByText(/Correct render of Room component/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to "/not found" or non-existent route', () => {
    history.push(AppRoute.NOT_FOUND);
    render(fakeApp);

    expect(screen.getByText(/Correct render of NotFoundScreen component/i)).toBeInTheDocument();
  });

  it('should render "Sign-in page" when user is not authorized and navigate to "/login"', () => {
    history.push(AppRoute.LOGIN);

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      [ReducerType.DATA]: {
        isOffersLoading: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    render(fakeApp);

    expect(screen.getByText(/Correct render of SignIn component/i)).toBeInTheDocument();
  });

  it('should redirect to "Sign-in page" when user is not authorized and navigate to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);

    const createFakeStore = configureStore({});
    store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      [ReducerType.DATA]: {
        isOffersLoading: false,
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );

    render(fakeApp);

    expect(screen.getByText(/Correct render of SignIn component/i)).toBeInTheDocument();
  });
});

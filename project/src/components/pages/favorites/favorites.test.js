import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import Favorites from './favorites';


const fakeHeaderComponent = () => (<p>Correct render of Header component</p>);
jest.mock('../../ui/header/header', () => fakeHeaderComponent);

const fakeEmptyFavoritesListComponent = () => (<p>Correct render of EmptyFavoritesList component</p>);
jest.mock('./empty-favorites-list/empty-favorites-list', () => fakeEmptyFavoritesListComponent);

const fakeFavoritesListComponent = () => (<p>Correct render of FavoritesList component</p>);
jest.mock('./favorites-list/favorites-list', () => fakeFavoritesListComponent);

let history = null;
let store = null;


describe('Component: Favorites', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({});
  });

  it('should render correctly if there are no favorite offers on the server', async () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    const dispatch = jest.fn(() => Promise.resolve([]));
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>,
      </Provider>,
    );

    await waitFor(() => expect(useDispatch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/Correct render of Header component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of EmptyFavoritesList component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Correct render of FavoritesList component/i)).not.toBeInTheDocument());
  });

  it('should render correctly if server return favorite offers', async () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    const dispatch = jest.fn(() => Promise.resolve([{}, {}, {}]));
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>,
      </Provider>,
    );

    await waitFor(() => expect(useDispatch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/Correct render of Header component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of FavoritesList component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Correct render of EmptyFavoritesList component/i)).not.toBeInTheDocument());
  });
});

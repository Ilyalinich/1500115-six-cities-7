import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FavoritesList from './favorites-list';


describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({});
    const history = createMemoryHistory();

    const fakeProps = {
      offers: [
        {
          id: 1,
          price: 222,
          rating: 5,
          title: 'Nice place',
          type: 'apartment',
          previewImage: '',
          isFavorite: true,
          isPremium: false,
          city: {name: 'cityName'},
        },
      ],

      updateOffers: () => {},
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesList
            {...fakeProps}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/cityName/i)).toBeInTheDocument();
    expect(screen.getByText(/€222/i)).toBeInTheDocument();
    expect(screen.getByText(/Nice place/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
    expect(screen.getByTestId('fav button')).toBeInTheDocument();
  });
});

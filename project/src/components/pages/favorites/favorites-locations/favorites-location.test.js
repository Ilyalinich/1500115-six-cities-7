import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FavoritesLocations from './favorites-locations';


describe('Component: FavoritesLocations', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({});
    const history = createMemoryHistory();


    const fakeProps ={
      city: 'cityName',
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
        },
      ],
      updateOffers: () => {},
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesLocations
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

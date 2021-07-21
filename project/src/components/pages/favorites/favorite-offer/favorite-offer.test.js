import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import FavoriteOffer from './favorite-offer';


describe('Component: FavoriteOffer', () => {
  it('should render correctly', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({});
    const history = createMemoryHistory();

    const fakeProps = {
      id: 1,
      price: 222,
      rating: 5,
      title: 'Nice place',
      type: 'apartment',
      previewImage: '',
      isFavorite: true,
      isPremium: false,
      favButtonClickHandler: () => {},
    };


    render(
      <Provider store={store}>
        <Router history={history}>
          <FavoriteOffer
            {...fakeProps}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/€222/i)).toBeInTheDocument();
    expect(screen.getByText(/Nice place/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
    expect(screen.getByTestId('fav button')).toBeInTheDocument();
  });
});

import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Offer from './offer';


describe('Component: Offer', () => {
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
      cardClassName: '',
      imageWrapperClassName: '',
      onMouseEnter: () => {},
      onMouseLeave: () => {},
    };

    render(
      <Provider store={store}>
        <Router history={history}>
          <Offer
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

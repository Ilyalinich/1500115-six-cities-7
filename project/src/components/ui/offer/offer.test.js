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

    const fakePrice = 222;
    const fakeTitle = 'Nice place';

    const fakeProps = {
      id: 1,
      price: fakePrice,
      rating: 5,
      title: fakeTitle,
      type: '',
      previewImage: '',
      isFavorite: true,
      isPremium: false,
      cardClassName: '',
      imageWrapperClassName: '',
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onFavoriteStatusChange: jest.fn(),
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

    expect(screen.getByText(new RegExp(`€${fakePrice}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeTitle}`, 'i'))).toBeInTheDocument();
    expect(screen.getByTestId('fav button')).toBeInTheDocument();
  });
});

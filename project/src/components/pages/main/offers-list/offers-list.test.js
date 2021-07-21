import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import OffersList from './offers-list';
import {ReducerType} from '../../../../store/root-reducer';
import {SortType} from '../../../../constant';


describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeState = {
      [ReducerType.DATA]: {
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
      },
      [ReducerType.OPERATION]: {
        currentCity: 'cityName',
        currentSortType: SortType.POPULAR,
      },
    };


    const createFakeStore = configureStore({});
    const store = createFakeStore(fakeState);

    render(
      <Provider store={store}>
        <Router history={history}>
          <OffersList />
        </Router>
      </Provider>,
    );


    expect(screen.getByText(/€222/i)).toBeInTheDocument();
    expect(screen.getByText(/Nice place/i)).toBeInTheDocument();
    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
    expect(screen.getByTestId('fav button')).toBeInTheDocument();
  });
});

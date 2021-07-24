import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CityMap from './city-map';
import {SortType, CITIES} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';


describe('Component: CityMap', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeCityName = CITIES[0];

    const createFakeStore = configureStore({});
    const store = createFakeStore({
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
            city: {
              location: {
                latitude: 52,
                longitude: 4,
                zoom: 16,
              },
              name: fakeCityName,
            },
            location: {
              latitude: 52,
              longitude: 4,
              zoom: 16,
            },
          },
        ],
      },
      [ReducerType.OPERATION]: {
        currentCity: fakeCityName,
        currentSortType: SortType.POPULAR,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <CityMap />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('map container')).toBeInTheDocument();
  });
});

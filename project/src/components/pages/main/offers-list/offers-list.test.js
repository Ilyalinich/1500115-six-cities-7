import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {SortType, CITIES} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';
import OffersList from './offers-list';


const fakeCityOfferComponent = () => (<p>Correct render of CityOffer component</p>);
jest.mock('../city-offer/city-offer', () => fakeCityOfferComponent);


describe('Component: OffersList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const fakeCityName = CITIES[0];

    const fakeState = {
      [ReducerType.DATA]: {
        offers: [
          {
            id: 1,
            city: {name: fakeCityName},
          },
        ],
      },
      [ReducerType.OPERATION]: {
        currentCity: fakeCityName,
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

    expect(screen.getByText(/Correct render of CityOffer component/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Correct render of CityOffer component/i)).toHaveLength(fakeState[ReducerType.DATA].offers.length);
  });
});

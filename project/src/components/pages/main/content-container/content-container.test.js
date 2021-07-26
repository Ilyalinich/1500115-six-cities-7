import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ContentContainer from './content-container';
import {ReducerType} from '../../../../store/root-reducer';
import {CITIES} from '../../../../constant';


const fakeFoundOffersTitleComponent = () => (<p>Correct render of FoundOffersTitle component</p>);
jest.mock('../found-offers-title/found-offers-title', () => fakeFoundOffersTitleComponent);

const fakeOffersSortFormComponent = () => (<p>Correct render of OffersSortForm component</p>);
jest.mock('../offers-sort-form/offers-sort-form', () => fakeOffersSortFormComponent);

const fakeOffersListComponent = () => (<p>Correct render of OffersList component</p>);
jest.mock('../offers-list/offers-list', () => fakeOffersListComponent);

const fakeCityMapComponent = () => (<p>Correct render of CityMap component</p>);
jest.mock('../city-map/city-map', () => fakeCityMapComponent);

const fakeEmptyListComponent = () => (<p>Correct render of EmptyList component</p>);
jest.mock('../empty-list/empty-list', () => fakeEmptyListComponent);


let history = null;


describe('Component: ContentBoard', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly when offers array contains any offers for current city', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
      },
      [ReducerType.DATA]: {
        offers: [
          {
            city: {name: CITIES[0]},
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ContentContainer />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Correct render of FoundOffersTitle component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of OffersSortForm component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of OffersList component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of CityMap component/i)).toBeInTheDocument();
    expect(screen.queryByText(/Correct render of EmptyList component/i)).not.toBeInTheDocument();
  });


  it('should render correctly when offers array doesn\'t contains any offers for current city', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: CITIES[0],
      },
      [ReducerType.DATA]: {
        offers: [
          {
            city: {name: ''},
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ContentContainer />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Correct render of EmptyList component/i)).toBeInTheDocument();
    expect(screen.queryByText(/Correct render of OffersSortForm component/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Correct render of OffersList component/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Correct render of CityMap component/i)).not.toBeInTheDocument();
  });
});

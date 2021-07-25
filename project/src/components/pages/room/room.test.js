import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import {AppRoute} from '../../../constant';
import Room from './room';


const fakeHeaderComponent = () => (<p>Correct render of Header component</p>);
jest.mock('../../ui/header/header', () => fakeHeaderComponent);

const fakeOfferGalleryComponent = () => (<p>Correct render of OfferGallery component</p>);
jest.mock('./offer-gallery/offer-gallery', () => fakeOfferGalleryComponent);

const fakeReviewsBoardComponent = () => (<p>Correct render of ReviewsBoard component</p>);
jest.mock('./reviews-board/reviews-board', () => fakeReviewsBoardComponent);

const fakeMapComponent = () => (<p>Correct render of Map component</p>);
jest.mock('../../ui/map/map', () => fakeMapComponent);

const fakeNeighboringListComponent = () => (<p>Correct render of NeighboringList component</p>);
jest.mock('./neighboring-list/neighboring-list', () => fakeNeighboringListComponent);


let history = null;
let store = null;
let fakeOfferId = null;
let fakeOffer = null;


describe('Component: Room', () => {
  beforeAll(() => {
    fakeOfferId = '1';
    fakeOffer = {
      id: fakeOfferId,
      description: 'Best place you ever seen',
      maxAdults: 3,
      goods: [],
      host: {},
      bedrooms: 2,
      images: [],
      price: 222,
      rating: 5,
      title: 'Nice place',
      type: 'apartment',
      previewImage: '',
      isFavorite: true,
      isPremium: false,
    };

    history = createMemoryHistory();
    history.push(`${AppRoute.OFFER}/${fakeOfferId}`);

    const createFakeStore = configureStore({});
    store = createFakeStore({});
  });

  it('should render correctly if server return current offer and neighboring offers data', async () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    const dispatch = jest.fn(() => Promise.resolve([fakeOffer, [{}, {}, {}]]));
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={`${AppRoute.OFFER}/:id`} component={Room} />
          </Switch>
        </Router>
      </Provider>,
    );

    await waitFor(() => expect(useDispatch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/Correct render of Header component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(new RegExp(`${fakeOffer.description}`, 'i'))).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(new RegExp(`${fakeOffer.title}`, 'i'))).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of OfferGallery component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of ReviewsBoard component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of Map component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of NeighboringList component/i)).toBeInTheDocument());
  });
});

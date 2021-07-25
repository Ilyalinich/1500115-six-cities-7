import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import * as Redux from 'react-redux';
import ReviewsBoard from './reviews-board';


const fakeReviewsListComponent = () => (<p>Correct render of ReviewsList component</p>);
jest.mock('../reviews-list/reviews-list', () => fakeReviewsListComponent);

const fakeReviewsFormComponent = () => (<p>Correct render of ReviewsForm component</p>);
jest.mock('../reviews-form/reviews-form', () => fakeReviewsFormComponent);

const fakeReviewsLoadinErrorMessageComponent = () => (<p>Correct render of ReviewsLoadinErrorMessage component</p>);
jest.mock('../reviews-loading-error-message/reviews-loading-error-message', () => fakeReviewsLoadinErrorMessageComponent);


let history = null;
let store = null;
let fakeOfferId = null;


describe('Component: ReviewsBoard', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({});

    fakeOfferId = '1';
  });

  it('should render correctly if server return reviews', async () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    const dispatch = jest.fn(() => Promise.resolve([{}, {}, {}]));
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsBoard offerId={fakeOfferId}/>
        </Router>,
      </Provider>,
    );

    await waitFor(() => expect(useDispatch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/Correct render of ReviewsList component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of ReviewsForm component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Correct render of ReviewsLoadinErrorMessage component/i)).not.toBeInTheDocument());
  });

  it('should render correctly if server return loading error', async () => {
    const useDispatch = jest.spyOn(Redux, 'useDispatch');

    const dispatch = jest.fn(() => Promise.reject());
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsBoard offerId={fakeOfferId}/>
        </Router>,
      </Provider>,
    );

    await waitFor(() => expect(useDispatch).toBeCalledTimes(1));
    await waitFor(() => expect(screen.getByText(/Correct render of ReviewsLoadinErrorMessage component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/Correct render of ReviewsForm component/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Correct render of ReviewsList component/i)).not.toBeInTheDocument());
  });
});

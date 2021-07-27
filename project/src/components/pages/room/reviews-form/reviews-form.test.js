import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AuthorizationStatus} from '../../../../constant';
import {ReducerType} from '../../../../store/root-reducer';
import ReviewsForm from './reviews-form';


const fakeRatingScaleComponent = () => (<p>Correct render of RatingScale component</p>);
jest.mock('./rating-scale/rating-scale', () => fakeRatingScaleComponent);

const fakeCommentFieldComponent = () => (<p>Correct render of CommentField component</p>);
jest.mock('./comment-field/comment-field', () => fakeCommentFieldComponent);

const fakeHelpMessageComponent = () => (<span>Correct render of HelpMessage component</span>);
jest.mock('./help-message/help-message', () => fakeHelpMessageComponent);

const fakePostErrorMessageComponent = () => (<span>Correct render of PostErrorMessage component</span>);
jest.mock('./post-error-message/post-error-message', () => fakePostErrorMessageComponent);


let history = null;
let fakeOfferId = null;
let fakeOnAddReview = null;


describe('Component: ReviewsForm', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    fakeOfferId = '1';
    fakeOnAddReview = jest.fn();
  });

  it('should render correctly if user authorized', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsForm offerId={fakeOfferId} onAddReview={fakeOnAddReview}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of RatingScale component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of CommentField component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of HelpMessage component/i)).toBeInTheDocument();
    expect(screen.queryByText(/Correct render of PostErrorMessage component/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).toHaveTextContent('Submit');
    expect(screen.queryByRole('button')).toHaveAttribute('disabled');
  });

  it('should no render if user not authorized', () => {
    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.AUTHORIZATION]: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewsForm offerId={fakeOfferId} onAddReview={fakeOnAddReview}/>
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Correct render of RatingScale component/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Correct render of CommentField component/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Correct render of HelpMessage component/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Correct render of PostErrorMessage component/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

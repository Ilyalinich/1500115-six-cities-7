import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {OFFERS} from './mocks/offers';
import {REVIEWS} from './mocks/reviews';
import {adaptOfferToClient, adaptReviewToClient} from './util/adapter';
import App from './components/app/app';
import {reducer} from './store/reducer';


const offers = OFFERS.map((offer) => adaptOfferToClient(offer));
const reviews = REVIEWS.map((review) => adaptReviewToClient(review));

const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

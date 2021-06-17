import React from 'react';
import ReactDOM from 'react-dom';
import {OFFERS} from './mocks/offers';
import {REVIEWS} from './mocks/reviews';
import {adaptOfferToClient, adaptReviewToClient} from './util/adapter';
import App from './components/app/app';


const offers = OFFERS.map((offer) => adaptOfferToClient(offer));
const reviews = REVIEWS.map((review) => adaptReviewToClient(review));


ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

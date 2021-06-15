import React from 'react';
import ReactDOM from 'react-dom';
import {OFFERS} from './mocks/offers';
import {adaptOfferToClient} from './util';
import App from './components/app/app';


const offers = OFFERS.map((offer) => adaptOfferToClient(offer));


ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

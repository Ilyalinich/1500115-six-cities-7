import {ActionCreator} from './action';
import {ApiRoute} from '../constant';
import {adaptOfferToClient} from '../util/adapter';


const loadOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
    .then((offers) => dispatch(ActionCreator.setOffers(offers)))
);


export {loadOffers};

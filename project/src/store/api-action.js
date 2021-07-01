import {ActionCreator} from './action';
import {ApiRoute, AppRoute} from '../constant';
import {adaptOfferToClient, adaptUserInfoToClient, adaptReviewToClient} from '../util/adapter';
import browserHistory from '../browser-history';


const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.login(adaptUserInfoToClient(data)));
    })
    .catch(() => {})
);

const login = (authData) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, authData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.login(adaptUserInfoToClient(data)));
    })
    .then(() => browserHistory.push(AppRoute.ROOT))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

const loadOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
    .then((offers) => dispatch(ActionCreator.setOffers(offers)))
);

const loadOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${offerId}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(ActionCreator.setOffer(offer)))
);

const loadReviews = (offerId) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.REVIEWS}/${offerId}`)
    .then(({data}) => data.map((review) => adaptReviewToClient(review)))
    .then((reviews) => dispatch(ActionCreator.setReviews(reviews)))
);

const loadNeighboringOffers = (offerId) => (dispatch, _getState, api) => (
  api.get(`${ApiRoute.OFFERS}/${offerId}${ApiRoute.NEARBY}`)
    .then(({data}) => data.map((offers) => adaptOfferToClient(offers)))
    .then((offers) => dispatch(ActionCreator.setNeighboringOffers(offers)))
);


export {loadOffers, checkAuth, login, logout, loadOffer, loadReviews, loadNeighboringOffers};

import {authorize, deauthorize, setOffers, updateOffers, redirectToRoute} from './action';
import {ApiRoute, AppRoute} from '../constant';
import {adaptOfferToClient, adaptUserInfoToClient, adaptReviewToClient} from '../util/adapter';


const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
    .then(({data}) => {
      dispatch(authorize(adaptUserInfoToClient(data)));
    })
    .catch(() => {})
);

const login = (authData) => (dispatch, _getState, api) => (
  api.post(ApiRoute.LOGIN, authData)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      dispatch(authorize(adaptUserInfoToClient(data)));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(ApiRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => api.defaults.headers['x-token'] = '')
    .then(() => dispatch(deauthorize()))
);

const loadOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
    .then((offers) => dispatch(setOffers(offers)))
    .catch(() => dispatch(setOffers([])))
);

const loadRoomPageData = (offerId) => (dispatch, _getState, api) => (
  Promise.all(
    [
      api.get(`${ApiRoute.OFFERS}/${offerId}`)
        .then(({data}) => adaptOfferToClient(data))
        .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND))),
      api.get(`${ApiRoute.OFFERS}/${offerId}${ApiRoute.NEARBY}`)
        .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
        .catch(() => {}),
    ],
  )
);

const loadReviews = (offerId) => (_dispatch, _getState, api) => (
  api.get(`${ApiRoute.REVIEWS}/${offerId}`)
    .then(({data}) => data.map((review) => adaptReviewToClient(review)))
);

const postReview = (offerId, newReview) => (_dispatch, _getState, api) => (
  api.post(`${ApiRoute.REVIEWS}/${offerId}`, newReview)
    .then(({data}) => data.map((review) => adaptReviewToClient(review)))
);

const loadFavoriteOffers = () => (_dispatch, _getState, api) => (
  api.get(ApiRoute.FAVORITE)
    .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
);

const updateFavoriteStatus = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`${ApiRoute.FAVORITE}/${offerId}/${status}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(updateOffers(offer)))
    .catch(() => dispatch(redirectToRoute(AppRoute.LOGIN)))
);


export {loadOffers, checkAuth, login, logout, loadReviews, loadRoomPageData, postReview, loadFavoriteOffers, updateFavoriteStatus};

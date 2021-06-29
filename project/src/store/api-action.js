import {ActionCreator} from './action';
import {ApiRoute, AppRoute} from '../constant';
import {adaptOfferToClient, adaptUserInfoToClient} from '../util/adapter';
import browserHistory from '../browser-history';


const loadOffers = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.OFFERS)
    .then(({data}) => data.map((offer) => adaptOfferToClient(offer)))
    .then((offers) => dispatch(ActionCreator.setOffers(offers)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiRoute.LOGIN)
  // .then(({data}) => {
  //   localStorage.setItem('token', data.token);
  //   dispatch(ActionCreator.login(adaptUserInfoToClient(data)));
  // })
  // .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

// нужен ли нам этот метод checkAuth? почему не сразу login

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


export {loadOffers, checkAuth, login, logout};

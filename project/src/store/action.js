import {createAction} from '@reduxjs/toolkit';


export const ActionType = {
  CHANGE_CITY: 'operation/changeCity',
  CHANGE_ACTIVE_OFFER_ID: 'operation/changeActiveOfferId',
  REST_ACTIVE_OFFER_ID: 'operation/restActiveOfferId',
  CHANGE_SORT_TYPE: 'operation/changeSortType',
  REDIRECT_TO_ROUTE: 'service/redirectToRoute',
  SET_OFFERS: 'data/setOffers',
  UPDATE_OFFERS: 'data/updateOffers',
  AUTHORIZE: 'authorization/authorize',
  DEAUTHORIZE: 'authorization/deauthorize',
};


export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({payload: city}));

export const changeActiveOfferId = createAction(ActionType.CHANGE_ACTIVE_OFFER_ID, (id) => ({payload: id}));

export const restActiveOfferId = createAction(ActionType.REST_ACTIVE_OFFER_ID);

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (sortType) => ({payload: sortType}));

export const setOffers = createAction(ActionType.SET_OFFERS, (offers) => ({payload: offers}));

export const updateOffers = createAction(ActionType.UPDATE_OFFERS, (offer) => ({payload: offer}));

export const authorize = createAction(ActionType.AUTHORIZE, (userInfo) => ({payload: userInfo}));

export const deauthorize = createAction(ActionType.DEAUTHORIZE);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));

const ActionType = {
  CHANGE_CITY: 'citySelect/changeCity',
  CHANGE_ACTIVE_OFFER_ID: 'offerSelect/changeActiveOfferId',
  REST_ACTIVE_OFFER_ID: 'offerSelect/restActiveOfferId',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
  SET_OFFERS: 'data/setOffers',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id,
  }),
  restActiveOfferId: () => ({
    type: ActionType.REST_ACTIVE_OFFER_ID,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  login: (userInfo) => ({
    type: ActionType.LOGIN,
    payload: userInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export {ActionType, ActionCreator};

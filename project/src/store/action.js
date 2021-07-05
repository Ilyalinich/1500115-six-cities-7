const ActionType = {
  CHANGE_CITY: 'citySelect/changeCity',
  CHANGE_ACTIVE_OFFER_ID: 'offerSelect/changeActiveOfferId',
  REST_ACTIVE_OFFER_ID: 'offerSelect/restActiveOfferId',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
  SET_OFFERS: 'data/setOffers',
  SET_OFFER: 'data/setOffer',
  SET_REVIEWS: 'data/setReviews',
  SET_NEIGHBORING_OFFERS: 'data/setNeighboringOffers',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
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
  setOffer: (offer) => ({
    type: ActionType.SET_OFFER,
    payload: offer,
  }),
  setReviews: (reviews) => ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  }),
  setNeighboringOffers: (offers) => ({
    type: ActionType.SET_NEIGHBORING_OFFERS,
    payload: offers,
  }),
  login: (userInfo) => ({
    type: ActionType.LOGIN,
    payload: userInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};

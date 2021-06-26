const ActionType = {
  CHANGE_CITY: 'citySelect/changeCity',
  CHANGE_ACTIVE_OFFER_ID: 'offerSelect/changeActiveOfferId',
  REST_ACTIVE_OFFER_ID: 'offerSelect/restActiveOfferId',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
  SET_OFFERS: 'data/setOffers',
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
};

export {ActionType, ActionCreator};

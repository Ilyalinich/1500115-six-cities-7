const ActionType = {
  CHANGE_CITY: 'citySelect/changeCity',
  CHANGE_ACTIVE_OFFER_ID: 'offerSelect/changeActiveOfferId',
  CHANGE_SORT_TYPE: 'sort/changeSortType',
  SET_OFFERS: 'api/setOffers',
};
// подумать над названиями 1.20 лекции;

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id,
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

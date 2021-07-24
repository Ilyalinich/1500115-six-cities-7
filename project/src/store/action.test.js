import {
  ActionType,
  changeCity,
  changeActiveOfferId,
  restActiveOfferId,
  changeSortType,
  setOffers,
  updateOffers,
  authorize,
  deauthorize,
  redirectToRoute
} from './action';


describe('Actions', () => {
  it('action creator for change city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'cityName',
    };

    const city = 'cityName';

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for change active offer id returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 'id',
    };

    const id = 'id';

    expect(changeActiveOfferId(id)).toEqual(expectedAction);
  });

  it('action creator for rest active offer id returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.REST_ACTIVE_OFFER_ID,
    };

    expect(restActiveOfferId()).toEqual(expectedAction);
  });

  it('action creator for change sort type returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: 'sortType',
    };

    const sortType = 'sortType';

    expect(changeSortType(sortType)).toEqual(expectedAction);
  });

  it('action creator for set offers returns correct action', () => {
    const offers = [];

    const expectedAction = {
      type: ActionType.SET_OFFERS,
      payload: offers,
    };

    expect(setOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for update offers returns correct action', () => {
    const offer = {};

    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: offer,
    };

    expect(updateOffers(offer)).toEqual(expectedAction);
  });

  it('action creator for authorize returns correct action', () => {
    const userInfo = {};

    const expectedAction = {
      type: ActionType.AUTHORIZE,
      payload: userInfo,
    };

    expect(authorize(userInfo)).toEqual(expectedAction);
  });

  it('action creator for deauthorize returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.DEAUTHORIZE,
    };

    expect(deauthorize()).toEqual(expectedAction);
  });

  it('action creator for redirect to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'url',
    };

    const url = 'url';

    expect(redirectToRoute(url)).toEqual(expectedAction);
  });
});

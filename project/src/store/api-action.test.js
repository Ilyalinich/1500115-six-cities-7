import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, logout, loadOffers, loadRoomPageData, loadReviews, postReview, loadFavoriteOffers, updateFavoriteStatus} from './api-action';
import {ApiRoute, AppRoute} from '../constant';
import {adaptOfferToClient, adaptUserInfoToClient, adaptReviewToClient} from '../util/adapter';

let api = null;

const fakeOffer = {
  bedrooms: 3,
  city: {
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: 'Paris',
  },
  description: '',
  goods: [],
  host: {
    'avatar_url': 'img/avatar-angelina.jpg',
    id: 25,
    'is_pro': true,
    name: 'Angelina',
  },
  id: 1,
  images: [],
  'is_favorite': true,
  'is_premium': false,
  location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
  'max_adults': 8,
  'preview_image': 'https://7.react.pages.academy/static/hotel/15.jpg',
  price: 291,
  rating: 4.3,
  title: 'Penthouse, 4-5 rooms + 5 balconies',
  type: 'hotel',
};

const fakeUserInfo = {
  'avatar_url': 'https://7.react.pages.academy/static/avatar/8.jpg',
  email: 'noname@mail.ru',
  id: 1,
  'is_pro': false,
  name: 'noname',
  token: 'bGluaWNoQHlhbmRleC5ydQ==',
};

const fakeReview = {
  comment: 'We loved it so much',
  date: '2021-06-30T16:51:35.215Z',
  id: 1,
  rating: 3,
  user: {
    'avatar_url': 'https://7.react.pages.academy/static/avatar/7.jpg',
    id: 16,
    'is_pro': true,
    name: 'Mollie',
  },
};


describe('Async operations', () => {
  beforeAll(() => {
    api = createApi(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, fakeUserInfo);


    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZE,
          payload: adaptUserInfoToClient(fakeUserInfo),
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: 'noname@mail.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, fakeUserInfo);


    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZE,
          payload: adaptUserInfoToClient(fakeUserInfo),
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(ApiRoute.LOGOUT)
      .reply(204);


    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.DEAUTHORIZE,
        });
      });
  });

  it('should make a correct API call to GET /offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = loadOffers();

    apiMock
      .onGet(ApiRoute.OFFERS)
      .reply(200, [fakeOffer]);


    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_OFFERS,
          payload: [adaptOfferToClient(fakeOffer)],
        });
      });
  });

  it('should make a correct API call to GET /current offer and neighboring offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = '1';
    const dataLoader = loadRoomPageData(fakeId);

    apiMock
      .onGet(`${ApiRoute.OFFERS}/${fakeId}`)
      .reply(200, fakeOffer);

    apiMock
      .onGet(`${ApiRoute.OFFERS}/${fakeId}${ApiRoute.NEARBY}`)
      .reply(200, [fakeOffer]);


    return dataLoader(dispatch, () => {}, api)
      .then((response) => {
        expect(response).toStrictEqual([adaptOfferToClient(fakeOffer), [adaptOfferToClient(fakeOffer)]]);
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it('should make a correct API call to GET /reviews', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = '111';
    const reviewsLoader = loadReviews(fakeId);

    apiMock
      .onGet(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(200, [fakeReview]);


    return reviewsLoader(dispatch, () => {}, api)
      .then((response) => {
        expect(response).toStrictEqual([adaptReviewToClient(fakeReview)]);
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it('should make a correct API call to POST /review', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = '111';
    const fakeNewReview = {
      comment: 'We loved it so much',
      rating: 3,
    };

    const reviewLoader = postReview(fakeId, fakeNewReview);

    apiMock
      .onPost(`${ApiRoute.REVIEWS}/${fakeId}`)
      .reply(200, [fakeReview]);


    return reviewLoader(dispatch, () => {}, api)
      .then((response) => {
        expect(response).toStrictEqual([adaptReviewToClient(fakeReview)]);
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it('should make a correct API call to GET /favorite offers', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteOffersLoader = loadFavoriteOffers();

    apiMock
      .onGet(ApiRoute.FAVORITE)
      .reply(200, [fakeOffer]);


    return favoriteOffersLoader(dispatch, () => {}, api)
      .then((response) => {
        expect(response).toStrictEqual([adaptOfferToClient(fakeOffer)]);
        expect(dispatch).toHaveBeenCalledTimes(0);
      });
  });

  it('should make a correct API call to POST /new favorite status', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeId = '1';
    const fakeStatus = '1';
    const favoriteStatusChanger = updateFavoriteStatus(fakeId, fakeStatus);

    apiMock
      .onPost(`${ApiRoute.FAVORITE}/${fakeId}/${fakeStatus}`)
      .reply(200, fakeOffer);


    return favoriteStatusChanger(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: adaptOfferToClient(fakeOffer),
        });
      });
  });
});

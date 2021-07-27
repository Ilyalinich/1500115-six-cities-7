import {AuthorizationStatus} from '../../constant';
import {authorize, deauthorize} from '../action';
import {authorization} from './authorization';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
};

const userInfo = {
  avatarUrl: 'https://7.react.pages.academy/static/avatar/3.jpg',
  email: 'noname@yandex.ru',
  id: 1,
  isPro: false,
  name: 'noname',
  token: 'bGluaWNoQHlhbmRleC5ydQ==',
};


describe('Reducer: authorization', () => {
  it('without additional parameters should return initial state', () => {
    expect(authorization(undefined, {}))
      .toEqual(initialState);
  });

  it('should update authorizationStatus to "AUTH" and update userInfo by load info', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    };

    expect(authorization(state, authorize(userInfo)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userInfo,
      });
  });

  it('should update authorizationStatus to "NO_AUTH" and rest userInfo to initial value', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo,
    };

    expect(authorization(state, deauthorize()))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userInfo: {},
      });
  });
});

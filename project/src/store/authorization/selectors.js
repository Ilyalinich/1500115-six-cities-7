import {ReducerType} from '../root-reducer';

export const getAuthStatus = (state) => state[ReducerType.AUTHORIZATION].authorizationStatus;
export const getUserAvatar = (state) => state[ReducerType.AUTHORIZATION].userInfo.avatarUrl;
export const getUserEmail = (state) => state[ReducerType.AUTHORIZATION].userInfo.email;

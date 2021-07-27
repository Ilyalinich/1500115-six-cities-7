import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../constant';
import {authorize, deauthorize} from '../action';


const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userInfo: {},
};


const authorization = createReducer(initialState, (builder) => {
  builder
    .addCase(authorize, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.AUTH;
      state.userInfo = action.payload;
    })
    .addCase(deauthorize, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.userInfo = initialState.userInfo;
    });
});


export {authorization};

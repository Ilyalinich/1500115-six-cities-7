import {createReducer} from '@reduxjs/toolkit';
import {authorize, deauthorize} from '../action';
import {AuthorizationStatus} from '../../constant';


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
    .addCase(deauthorize, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.userInfo = initialState.userInfo;
    });
});


export {authorization};


// const authorization = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.LOGIN:
//       return {
//         ...state,
//         authorizationStatus: AuthorizationStatus.AUTH,
//         userInfo: action.payload,
//       };

//     case ActionType.LOGOUT:
//       return {
//         ...state,
//         authorizationStatus: AuthorizationStatus.NO_AUTH,
//         userInfo: initialState.userInfo,
//       };

//     default:
//       return state;
//   }
// };

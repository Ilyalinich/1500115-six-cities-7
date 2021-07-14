import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {createApi} from './services/api';
import {rootReducer} from './store/root-reducer';
import {loadOffers, checkAuth} from './store/api-action';
import {deauthorize} from './store/action';
import {redirect} from './store/middlewares/redirect';


const api = createApi(
  () => store.dispatch(deauthorize()),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});


store.dispatch(checkAuth());
store.dispatch(loadOffers());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

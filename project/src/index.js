import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import {createApi} from './services/api';
import {rootReducer} from './store/root-reducer';
import {loadOffers, checkAuth} from './store/api-action';
import {deauthorize} from './store/action';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';
import App from './components/app/app';


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
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

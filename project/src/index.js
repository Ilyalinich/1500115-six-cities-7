import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const MainPageData = {
  OFFERS_COUNT: 312,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={MainPageData.OFFERS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

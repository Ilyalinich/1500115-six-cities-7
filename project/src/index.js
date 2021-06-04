import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const MainPageData = {
  PLACES_COUNT: 312,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={MainPageData.PLACES_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

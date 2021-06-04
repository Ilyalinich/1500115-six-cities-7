import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';


function App({placesCount}) {
  return (
    <Main
      placesCount={placesCount}
    />
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};


export default App;

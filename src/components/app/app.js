import React from 'react';
import Main from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {placesToStay, placeCardName} = props;

  return (
    <React.Fragment>
      <Main
        placesToStay = {placesToStay}
        placeCardName = {placeCardName}
      />
    </React.Fragment>
  );
};

export default App;

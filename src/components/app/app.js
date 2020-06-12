import React from 'react';
import App from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const Main = (props) => {
  const {placesToStay, placeCardName} = props;

  return (
    <React.Fragment>
      <App
        placesToStay = {placesToStay}
        placeCardName = {placeCardName}
      />
    </React.Fragment>
  );
};

export default Main;

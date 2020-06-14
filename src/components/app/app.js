import React from 'react';
import Main from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {numberFoundPlaces, placeCardName} = props;

  return (
    <React.Fragment>
      <Main
        numberFoundPlaces={numberFoundPlaces}
        placeCardName={placeCardName}
      />
    </React.Fragment>
  );
};

export default App;

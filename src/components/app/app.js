import React from 'react';
import Main from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {numberFoundPlaces, placeCardName} = props;

  // disable console.log wanring
  /* eslint-disable-next-line */
  const onTitleClickTest = () => console.log(`The REAL function fired!`);

  return (
    <React.Fragment>
      <Main
        numberFoundPlaces={numberFoundPlaces}
        placeCardName={placeCardName}
        onTitleClickTest={onTitleClickTest}
      />
    </React.Fragment>
  );
};

export default App;

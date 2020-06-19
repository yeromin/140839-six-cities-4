import React from 'react';
import Main from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {
    // numberFoundPlaces,
    placeListData,
    placeCardData} = props;

  // disable console.log wanring
  /* eslint-disable-next-line */
  const onTitleClickTest = () => console.log(`The REAL function fired!`);

  return (
    <React.Fragment>
      <Main
        // numberFoundPlaces={numberFoundPlaces}
        placeListData={placeListData}
        placeCardData={placeCardData}
        onTitleClickTest={onTitleClickTest}
      />
    </React.Fragment>
  );
};

export default App;

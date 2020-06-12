import React from 'react';
import App from '../main/main';
// import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
const Main = () => {
  // const placeNames = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];

  return (
    <React.Fragment>
      <App
        placesToStay={13123}
        placeCardName={[`Beautiful & luxurious 111`, `Wood and stone place 222`, `apartment at great location 333`, `Beautiful & luxurious 4444`, `apartment at great location 55555`]}
      />
    </React.Fragment>
  );
};

export default Main;

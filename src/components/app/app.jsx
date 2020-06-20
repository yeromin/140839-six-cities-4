import React from 'react';
import Main from '../main/main.jsx';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {mockData} = props;

  const handlePlaceCardTitleClick = (evt) => {
    evt.preventDefault();
    // disable console.log wanring
    /* eslint-disable-next-line */
    console.log(`The REAL function fired!`, evt.target);
  };

  const handlePlaceCardHover = () => {
    // disable console.log wanring
    /* eslint-disable-next-line */
    console.log(`Place card hovered`);
  };

  return (
    <React.Fragment>
      <Main
        // numberFoundPlaces={numberFoundPlaces}
        // placeListData={placeListData}
        // placeCardData={placeCardData}
        mockData={mockData}
        handlePlaceCardTitleClick={handlePlaceCardTitleClick}
        handlePlaceCardHover={handlePlaceCardHover}
      />
    </React.Fragment>
  );
};

export default App;

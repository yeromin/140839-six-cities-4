import React from 'react';
import Main from '../main/main.jsx';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {mockData} = props;

  const handleOfferCardTitleClick = (evt) => {
    evt.preventDefault();
    // disable console.log wanring
    /* eslint-disable-next-line */
    console.log(`The REAL function fired!`, evt.target);
  };

  // const handleOfferCardHover = () => {
  //   // disable console.log wanring
  //   /* eslint-disable-next-line */
  //   console.log(`Place card hovered`);
  // };

  return (
    <React.Fragment>
      <Main
        // numberFoundPlaces={numberFoundPlaces}
        // placeListData={placeListData}
        // placeCardData={placeCardData}
        mockData={mockData}
        handleOfferCardTitleClick={handleOfferCardTitleClick}
        // handleOfferCardHover={handleOfferCardHover}
      />
    </React.Fragment>
  );
};

export default App;

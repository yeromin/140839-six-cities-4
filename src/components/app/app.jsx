import React from 'react';
import Main from '../main/main.jsx';

/* eslint-disable react/prop-types */
const App = (props) => {
  const {mockData} = props;

  const handleOfferCardTitleClick = (evt) => {
    evt.preventDefault();

    /* eslint-disable-next-line */ // disable console.log wanring
    console.log(`The REAL function fired!`, evt.target);
  };

  // const handleOfferCardHover = () => {
  //   /* eslint-disable-next-line */ // disable console.log wanring
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

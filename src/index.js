import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockData from './mocks/offers';

// const placeListData = mockData.offersList;
// const placeCardData = mockData.offerCard;


const init = () => {

  // console.log(placeListData);

  ReactDOM.render(
      <App
        // numberFoundPlaces={13123}
        // placeListData={placeListData}
        // placeCardData={placeCardData}
        mockData={mockData}
      />,
      document.querySelector(`#root`)
  );
};

init();

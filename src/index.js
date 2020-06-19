import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockData from './mocks/offers';

const placeListData = mockData.placesList;
const placeCardData = mockData.placeOfferCard;



const init = () => {

  // console.log(placeListData);

  ReactDOM.render(
      <App
        // numberFoundPlaces={13123}
        placeListData={placeListData}
        placeCardData={placeCardData}
      />,
      document.querySelector(`#root`)
  );
};

init();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mockData from './mocks/offers';

// console.log(mockData.placeOfferCard[1].name);

const placeCardName = mockData.placeOfferCard;

const init = () => {
  ReactDOM.render(
      <App
        numberFoundPlaces={13123}
        // placeCardName={[
        //   `Beautiful & luxurious`,
        //   `Wood and stone place`,
        //   `apartment at great location`,
        //   `Beautiful & luxurious`,
        //   `apartment at great location`
        // ]}
        placeCardName={placeCardName}
      />,
      document.querySelector(`#root`)
  );
};

init();

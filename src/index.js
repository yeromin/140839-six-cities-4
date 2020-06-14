import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const init = () => {
  ReactDOM.render(
      <App
        numberFoundPlaces={13123}
        placeCardName={[
          `Beautiful & luxurious`,
          `Wood and stone place`,
          `apartment at great location`,
          `Beautiful & luxurious`,
          `apartment at great location`
        ]}
      />,
      document.querySelector(`#root`)
  );
};

init();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockData from './mocks/offers';

const init = () => {
  ReactDOM.render(
      <App mockData={mockData}/>,
      document.querySelector(`#root`)
  );
};

init();

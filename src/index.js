import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockData from './mocks/offers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './Store/reducer';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// console.log(store.getState());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App mockData={mockData} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

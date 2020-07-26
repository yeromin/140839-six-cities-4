import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mockData from './mocks/offers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './Store/reducer';
import thunk from 'redux-thunk';
import createAPI from './utils/api';

// createAPI - функция из модуля api.js,
const apiConfigured = createAPI(() => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(apiConfigured)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App mockData={mockData} />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
// import mockData from './mocks/offers';
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import {reducer} from './Store/reducer'; // ActionCreator
import thunk from 'redux-thunk';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user';
import {Operation as DataOperation, reducer} from "./reducer/data/data.js";

import {createAPI} from './utils/api';

// const onUnauthorized = () => {
//   store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
// };

const api = createAPI(); // onUnauthorized

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadPlaces());

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App /> {/* mockData={mockData} */}
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();

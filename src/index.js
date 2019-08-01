import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

import logger from 'redux-logger';
import thunk from 'redux-thunk';

// needed dependancies:
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers


//LOGGGER & MIDDLEWARE This is a very basic middleware package that will 
//console.log your actions as they flow through the action creators,
// before they hit the reducer.

//store = single source of truth
const store = createStore(
  rootReducer,
  applyMiddleware (thunk, logger)//helper function
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

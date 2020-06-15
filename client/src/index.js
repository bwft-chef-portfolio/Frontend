import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import logger from "redux-logger";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// #routing-client-side
// set up router here from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

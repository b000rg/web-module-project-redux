import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";
import reducer, { initialState } from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

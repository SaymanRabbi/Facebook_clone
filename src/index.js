import React from "react";
import ReactDOM from "react-dom";
import { QueryClient } from 'react-query';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers";
import "./styles/icons/icons.css";
const queryClient = new QueryClient()
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
 ,
  document.getElementById("root")
);

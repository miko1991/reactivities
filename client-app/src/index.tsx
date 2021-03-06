import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreContext, store } from "./stores/store";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Router history={history}>
        <App />
      </Router>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

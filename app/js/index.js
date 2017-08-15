import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Layout from "./js/components/layout.js";
import store from "./js/store.js";

ReactDOM.render(
  <Provider store={store}>
    <Layout></Layout>
  </Provider>,
  document.querySelector(".app")
);

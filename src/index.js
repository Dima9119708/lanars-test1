import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import Wrapper from './component/Wrapper';
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Wrapper />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

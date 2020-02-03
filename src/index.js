import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { unregister } from './serviceWorker';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
unregister();


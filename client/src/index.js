import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
  <Router>
  <App />
</Router>
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();

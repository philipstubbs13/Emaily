import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';

const store = createStore(() => [], {}, applyMiddleware());

reactDOM.render(
<Provider store={store}><App /></Provider>,
 document.querySelector('#root')
);
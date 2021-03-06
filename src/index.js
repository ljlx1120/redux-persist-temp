import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/tailwind.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate }from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, document.getElementById('root'));
registerServiceWorker();

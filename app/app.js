import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import * as actions from './reducers/actions.js';
import store from './store.js';
import App from './containers/App'



render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>

  </div>
  , document.body.appendChild(document.createElement('div')));


//<DebugPanel top bottom bottom>
//  <DevTools store={store} monitor={LogMonitor}/>
//</DebugPanel>

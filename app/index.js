import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react';

import * as actions from './reducers/actions.js';
import store from './store.js';
import App from './containers/App'

store.dispatch(actions.addTodo("asdf"));


render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>

    <DebugPanel top left bottom>
      <DevTools store={store} monitor={LogMonitor}/>
    </DebugPanel>
  </div>
  , document.body.appendChild(document.createElement('div')));



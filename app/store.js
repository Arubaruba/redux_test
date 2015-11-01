import todoApp from './reducers/index.js';
import { compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';
import Immutable from 'immutable';

const finalCreateStore = compose(devTools())(createStore);

export default finalCreateStore(todoApp, todoApp(Immutable.Map(), {type: null}));

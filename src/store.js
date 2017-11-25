import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/sagas';

import rootReducer from './reducers/index';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';

const defaultStore = {};

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, defaultStore, applyMiddleware(sagaMiddleWare));

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(feathers.authentication({storage: window.localStorage}));

sagaMiddleWare.run(mySaga, app);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
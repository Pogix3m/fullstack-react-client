import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import { rootReducer, rootSaga } from './modules';

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export const history = createHistory();

import { compose, legacy_createStore as createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import {rootReducers} from "./root-reducer";
//import thunk from "redux-thunk";
import {rootSaga} from "./root-saga";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean)

const composedEnhancer =
    (process.env.NODE_ENV !== 'production' && window && window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)
import { compose, legacy_createStore as createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {rootReducers} from "./root-reducer";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)


const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

const composedEnhancer =
    (process.env.NODE_ENV !== 'production' && window && window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
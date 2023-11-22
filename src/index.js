import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import './index.scss';
import App from './App';
//import { UserProvider } from './contexts/user.context';
//import { CartProvider } from './contexts/cart.context';
//import { CategoriesProvider } from './contexts/categories.context';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      {/*<UserProvider>*/}
       {/* <CategoriesProvider>*/}
        {/*  <CartProvider>*/}
            <App />
         {/* </CartProvider>*/}
       {/* </CategoriesProvider>*/}
      {/*</UserProvider>*/}
    </BrowserRouter>
      </PersistGate>
   </Provider>
  </React.StrictMode>
,
  rootElement,
);

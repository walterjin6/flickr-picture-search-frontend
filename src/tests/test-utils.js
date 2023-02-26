import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import picturesReducer from "../features/pictures/picturesSlice";
import { apiSlice } from "../app/api/apiSlice";
import authReducer from '../features/auth/authSlice'
import { BrowserRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom' 
const history = createMemoryHistory()

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        pictures: picturesReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
         {children}
        </BrowserRouter>
      </Provider>
    )
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}



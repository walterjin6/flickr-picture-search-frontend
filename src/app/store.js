import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../features/auth/authSlice'
import picturesReducer from '../features/pictures/picturesSlice'
    
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    pictures: picturesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

setupListeners(store.dispatch)

import { configureStore } from '@reduxjs/toolkit'
import stocksReducer from './stockSlice';

export const store = configureStore({
  reducer: {
    trade: stocksReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
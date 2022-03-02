import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import paginationReducer from '../features/paginationSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

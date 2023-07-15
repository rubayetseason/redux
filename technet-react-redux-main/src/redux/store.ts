import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import userReducer from './features/userSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

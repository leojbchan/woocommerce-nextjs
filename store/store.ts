import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  // Redux Toolkit includes thunk as default middleware
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {cart: CartState}
export type AppDispatch = typeof store.dispatch;

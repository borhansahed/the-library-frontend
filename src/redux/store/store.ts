import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../api/book.api";
import { authApi } from "../api/auth.api";
// ...
const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      bookApi.middleware,
      authApi.middleware,
    ]);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

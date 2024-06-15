import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { boardsReducer } from "./boards/slice";
import { authReducer } from "./auth/slice";
import { columnReducer } from "./columns/slice";
import { tasksReducer } from "./tasks/slice";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filter/slice";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    auth: persistedAuthReducer,
    column: columnReducer,
    tasks: tasksReducer,
    filter: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

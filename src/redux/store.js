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
import { themsReducer } from "./theme/slice";

const authPersistConfig = {
  key: "authSlice",
  storage,
  whitelist: ["token"],
};
const themePersistConfig = {
  key: "theme",
  storage,
  blacklist: ["status", "error"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedThemeReducer = persistReducer(themePersistConfig, themsReducer);
export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    auth: persistedAuthReducer,
    column: columnReducer,
    tasks: tasksReducer,
    filter: filtersReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

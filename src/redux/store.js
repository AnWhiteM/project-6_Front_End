// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// *HW example - start
// const authPersistConfig = {
//   key: "authSlice",
//   storage,
//   whitelist: ["token"],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
// *HW example - end

// export const store = configureStore({
// *reducers here are also for example
//    reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//     auth: persistedAuthReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

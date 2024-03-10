import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    filter: filterReducer,
    contactList: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
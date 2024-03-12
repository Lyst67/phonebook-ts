import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";
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
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)
const persistedContactReducer = persistReducer(contactsPersistConfig, contactsReducer)
export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contactList: persistedContactReducer,
    filter: filterReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      serializableCheck: 
        { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],},
      
    }),
  
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

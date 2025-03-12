import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa localStorage en web
import rootSaga from "./sagas";
import rootReducer from "./reducers"; // Asegúrate de que usersReducer está en rootReducer

const sagaMiddleware = createSagaMiddleware();

// Configuración de redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users"], // 🔥 Agregamos "users" para que se persista
};

// Reducer persistente
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crear store con persistencia y middleware
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Configurar Redux-Persist
const persistor = persistStore(store);

// Ejecutar Redux-Saga
sagaMiddleware.run(rootSaga);

export { store, persistor };

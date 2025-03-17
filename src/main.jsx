import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";
import Notifications from "./containers/NotificationsContainer";
import Loader from "./containers/LoaderContainer";
import Header from "./containers/HeaderContainer";

import "./i18n";

import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import customTheme from "./themes/customTheme";

function Root() {
  const selectedTheme = useSelector((state) => state.config.theme);

  const theme =
    selectedTheme === "dark"
      ? darkTheme
      : selectedTheme === "custom"
      ? customTheme
      : selectedTheme === "light"
      ? lightTheme
      : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Notifications />
      <Loader />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

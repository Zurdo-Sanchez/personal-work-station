import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import customTheme from "./themes/customTheme";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";
import Notifications from "./containers/NotificationsContainer";
import Loader from "./containers/LoaderContainer";
import "./i18n";

function Root() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme
        ? darkTheme
        : prevTheme === darkTheme
        ? customTheme
        : lightTheme
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Loader />
          <Notifications />
          <App />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              Cambiar Tema
            </Button>
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

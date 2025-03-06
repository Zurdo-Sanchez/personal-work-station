import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import customTheme from "./themes/customTheme";
import store from "./store";
import App from "./App";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Cambiar Tema
          </Button>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);

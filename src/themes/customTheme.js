import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.warning },
    secondary: { main: colors.success },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
    info: { main: colors.info },
    background: { default: "#f4e1d2", paper: colors.paperLight },
    text: { primary: "#333333", secondary: "#666666" },
  },
});

export default customTheme;

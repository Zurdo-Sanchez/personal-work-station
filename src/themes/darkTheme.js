import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
    info: { main: colors.info },
    background: { default: colors.backgroundDark, paper: colors.paperDark },
    text: {
      primary: colors.textPrimaryDark,
      secondary: colors.textSecondaryDark,
    },
  },
});

export default darkTheme;

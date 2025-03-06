import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.error },
    info: { main: colors.info },
    background: { default: colors.backgroundLight, paper: colors.paperLight },
    text: {
      primary: colors.textPrimaryLight,
      secondary: colors.textSecondaryLight,
    },
  },
});

export default lightTheme;

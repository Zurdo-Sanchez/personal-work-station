import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles({
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  loginPaper: {
    padding: "2rem",
    textAlign: "center",
    borderRadius: "12px",
    background: colors.paperLight,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  loginButton: {
    marginTop: "1rem",
    "&.MuiButton-containedPrimary": {
      backgroundColor: colors.primary,
    },
    "&.MuiButton-containedSecondary": {
      backgroundColor: colors.secondary,
    },
    "&.MuiButton-containedError": {
      backgroundColor: colors.error,
    },
  },
  registerButton: {
    marginTop: "1rem",
    borderColor: colors.primary,
    color: colors.primary,
    "&:hover": {
      backgroundColor: colors.primary,
      color: colors.textPrimaryDark,
    },
  },
  loadingIndicator: {
    margin: "1rem",
  },
});

export default useStyles;

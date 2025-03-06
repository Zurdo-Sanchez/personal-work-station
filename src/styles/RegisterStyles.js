import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles({
  registerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  registerPaper: {
    padding: "2rem",
    textAlign: "center",
    borderRadius: "12px",
    background: colors.paperLight,
  },
  registerForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  registerButton: {
    marginTop: "1rem",
    backgroundColor: colors.primary,
    color: colors.textPrimaryLight,
    "&:hover": {
      backgroundColor: colors.secondary,
    },
  },
  loadingIndicator: {
    margin: "1rem auto",
  },
});

export default useStyles;

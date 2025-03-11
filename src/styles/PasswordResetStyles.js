import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles(() => ({
  passwordResetContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  passwordResetPaper: {
    padding: "2rem",
    textAlign: "center",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  passwordResetForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  resetButton: {
    backgroundColor: colors.primary,
    color: "#fff",
    "&:hover": {
      backgroundColor: colors.primaryDark,
    },
  },
  loadingIndicator: {
    marginTop: "1rem",
  },
}));

export default useStyles;

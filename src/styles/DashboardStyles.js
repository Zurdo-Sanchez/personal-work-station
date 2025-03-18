import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles({
  container: {
    padding: "30px",
    backgroundColor: colors.background,
    minHeight: "800vh",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
    color: colors.textPrimary,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    borderRadius: "16px",
    "&:hover": {
      boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    padding: "30px 20px",
    fontSize: "18px",
    color: colors.textPrimary,
  },
  logoutButton: {
    marginTop: "40px",
    padding: "12px 24px",
    backgroundColor: colors.primary,
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
    "&:hover": {
      backgroundColor: colors.primaryDark,
    },
  },
});
export default useStyles;

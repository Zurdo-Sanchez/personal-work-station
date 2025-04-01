import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

export const calendarStyleValues = {};

const useStyles = makeStyles({
  calendarWrapper: {
    margin: "1rem 0",
    padding: "1rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  calendarTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "1rem",
    color: colors.textPrimary,
  },
  eventContentContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px",
  },
  eventDetails: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.75rem",
    color: "#555",
  },
});

export default useStyles;

import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: colors.primary,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  languageSelector: {
    color: colors.textPrimaryLight,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 8,
    "& .MuiSelect-icon": {
      color: colors.textPrimaryLight,
    },
  },
  userMenu: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: colors.secondary,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  userName: {
    padding: "10px",
    fontWeight: "bold",
  },
  icon: {
    marginRight: "8px",
  },
});

export default useStyles;

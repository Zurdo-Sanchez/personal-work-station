import { makeStyles } from "@mui/styles";
import { colors } from "../themes/colors";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: colors.primary,
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    width: "100% !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftToolbar: {
    width: "20%",
    display: "flex",
    justifyContent: "flex-end",
    width: "20%",
  },
  midToolbar: {
    display: "flex",
    justifyContent: "space-around",
    width: "60%",
  },
  rightToolbar: {
    display: "flex",
    alignItems: "center",
    width: "20%",
  },
  midToolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  rightToolbar: {
    display: "flex",
    alignItems: "center",
  },
  languageSelector: {
    border: "none", // Elimina el borde
    boxShadow: "none", // Evita sombras que puedan parecer bordes
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none", // Elimina el borde de Select cuando está en modo outlined
    },
    "&:focus, &:hover, &:active": {
      border: "none",
      boxShadow: "none",
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

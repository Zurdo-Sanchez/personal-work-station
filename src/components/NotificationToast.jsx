import { useTranslation } from "react-i18next";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useStyles from "../styles/NotificationStyles";

function NotificationToast({
  message,
  type,
  visible,
  duration,
  hideNotification,
}) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      {visible ? (
        <Snackbar
          open={visible}
          autoHideDuration={duration > 0 ? duration : null} // Si es 0, no se cierra solo
          onClose={hideNotification}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          className={classes.notification}
        >
          <Alert
            severity={type}
            variant="filled"
            action={
              <IconButton
                size="small"
                onClick={hideNotification}
                color="inherit"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
          >
            {t(message)}
          </Alert>
        </Snackbar>
      ) : null}
    </>
  );
}

export default NotificationToast;

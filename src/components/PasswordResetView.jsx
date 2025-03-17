import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import useStyles from "../styles/PasswordResetStyles";

function PasswordResetView({
  resetPassword,
  loading,
  error,
  getPasswordResetSuccessSelector,
  setResetPasswordSuccess,
}) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (email.trim() !== "") {
      resetPassword(email);
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (getPasswordResetSuccessSelector) {
      setResetPasswordSuccess(false);
      handleBackToLogin();
    }
  }, [getPasswordResetSuccessSelector]);

  return (
    <Container maxWidth="sm" className={classes.passwordResetContainer}>
      <Paper elevation={6} className={classes.passwordResetPaper}>
        <Typography variant="h4" gutterBottom>
          {t("resetPassword")}
        </Typography>
        <>
          <Box className={classes.passwordResetForm}>
            <TextField
              fullWidth
              margin="normal"
              label={t("email")}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {loading ? (
              <CircularProgress className={classes.loadingIndicator} />
            ) : (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                  className={classes.resetButton}
                >
                  {t("resetPasswordButton")}
                </Button>

                {/* ✅ Nuevo botón para volver al login */}
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={handleBackToLogin}
                  className={classes.backToLoginButton}
                  sx={{ mt: 2 }} // Espaciado arriba
                >
                  {t("backToLogin")}
                </Button>
              </>
            )}
          </Box>
        </>
      </Paper>
    </Container>
  );
}

export default PasswordResetView;

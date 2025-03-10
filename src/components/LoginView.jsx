import { useState } from "react";
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
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import useStyles from "../styles/LoginStyles";

function LoginView({
  loginRequest, // Ahora viene del container
  loginWithGoogle,
  loginWithGitHub,
  logoutRequest,
  user,
  loading,
  error,
}) {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Manejo de inicio de sesión con email y contraseña
  const handleLogin = () => {
    if (email && password) {
      loginRequest(email, password); // Llamar a la acción del container
    }
  };

  return (
    <Container maxWidth="sm" className={classes.loginContainer}>
      <Paper elevation={6} className={classes.loginPaper}>
        <Typography variant="h4" gutterBottom>
          {user ? `${t("welcome")}, ${user.email}` : t("login")}
        </Typography>
        {error && (
          <Typography color="error">
            {t(error.code) || t("auth/internal-error")}
          </Typography>
        )}
        {!user ? (
          <Box className={classes.loginForm}>
            <TextField
              fullWidth
              margin="normal"
              label={t("email")}
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label={t("password")}
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <CircularProgress className={classes.loadingIndicator} />
            ) : (
              <>
                {/* Botón de inicio de sesión con Email y Contraseña */}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<EmailIcon />}
                  onClick={handleLogin}
                  className={classes.loginButton}
                >
                  {t("login")}
                </Button>

                {/* Botón de inicio de sesión con Google */}
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<GoogleIcon />}
                  onClick={loginWithGoogle}
                  className={classes.loginButton}
                >
                  {t("loginWithGoogle")}
                </Button>

                {/* Botón de inicio de sesión con GitHub */}
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<GitHubIcon />}
                  onClick={loginWithGitHub}
                  className={classes.loginButton}
                >
                  {t("loginWithGitHub")}
                </Button>

                {/* Botón para ir al registro */}
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  onClick={() => navigate("/register")}
                  className={classes.registerButton}
                >
                  {t("goToRegister")}
                </Button>
              </>
            )}
          </Box>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={logoutRequest}
            className={classes.loginButton}
          >
            {t("logout")}
          </Button>
        )}
      </Paper>
    </Container>
  );
}

export default LoginView;

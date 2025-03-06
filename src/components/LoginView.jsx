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
import useStyles from "../styles/LoginStyles";

function LoginView({
  loginRequest,
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

  return (
    <Container maxWidth="sm" className={classes.loginContainer}>
      <Paper elevation={6} className={classes.loginPaper}>
        <Typography variant="h4" gutterBottom>
          {user ? `${t("welcome")}, ${user.email}` : t("login")}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {!user ? (
          <Box className={classes.loginForm}>
            <TextField
              fullWidth
              margin="normal"
              label={t("email")}
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label={t("password")}
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <CircularProgress className={classes.loadingIndicator} />
            ) : (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<GoogleIcon />}
                  onClick={loginWithGoogle} // Ahora viene del container
                  className={classes.loginButton}
                >
                  {t("loginWithGoogle")}
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<GitHubIcon />}
                  onClick={loginWithGitHub} // Ahora viene del container
                  className={classes.loginButton}
                >
                  {t("loginWithGitHub")}
                </Button>
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
            onClick={logoutRequest} // Ahora viene del container
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

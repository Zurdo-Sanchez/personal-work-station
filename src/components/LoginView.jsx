import { useDispatch, useSelector } from "react-redux";
import {
  logoutRequest,
  loginWithGoogle,
  loginWithGitHub,
} from "../store/actions/usersActions";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Container,
  Paper,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

function LoginView() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={6}
        style={{
          padding: "2rem",
          textAlign: "center",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          {user ? `Bienvenido, ${user.email}` : "Iniciar Sesión"}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {!user ? (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              <CircularProgress style={{ margin: "1rem" }} />
            ) : (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  startIcon={<GoogleIcon />}
                  onClick={() => dispatch(loginWithGoogle())}
                  style={{ marginTop: "1rem" }}
                >
                  Iniciar con Google
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<GitHubIcon />}
                  onClick={() => dispatch(loginWithGitHub())}
                  style={{ marginTop: "1rem" }}
                >
                  Iniciar con GitHub
                </Button>
              </>
            )}
          </>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={() => dispatch(logoutRequest())}
          >
            Cerrar Sesión
          </Button>
        )}
      </Paper>
    </Container>
  );
}

export default LoginView;

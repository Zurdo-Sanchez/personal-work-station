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
import useStyles from "../styles/RegisterStyles";

function RegisterView({ register, loading, error }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    birthdate: "",
    country: "",
    city: "",
    avatar: "",
    linkedIn: "",
    gitHub: "",
  });

  const [errors, setErrors] = useState({});

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validación de los campos requeridos
  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = t("emailRequired");
    if (!formData.password) newErrors.password = t("passwordRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      register(formData);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.registerContainer}>
      <Paper elevation={6} className={classes.registerPaper}>
        <Typography variant="h4" gutterBottom>
          {t("register")}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box className={classes.registerForm}>
          <TextField
            fullWidth
            required
            label={t("email")}
            name="email"
            variant="outlined"
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            required
            label={t("password")}
            name="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            fullWidth
            label={t("birthdate")}
            name="birthdate"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label={t("country")}
            name="country"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label={t("city")}
            name="city"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label={t("avatar")}
            name="avatar"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label={t("linkedIn")}
            name="linkedIn"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label={t("gitHub")}
            name="gitHub"
            variant="outlined"
            onChange={handleChange}
          />
          {loading ? (
            <CircularProgress className={classes.loadingIndicator} />
          ) : (
            <>
              <Button
                fullWidth
                variant="contained"
                className={classes.registerButton}
                onClick={handleSubmit}
              >
                {t("registerButton")}
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                onClick={() => navigate("/login")}
                className={classes.loginButton}
              >
                {t("goToLogin")}
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default RegisterView;

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
  Grid,
} from "@mui/material";
import useStyles from "../styles/RegisterStyles";

function RegisterView({ register, loading, error }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
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

    // Si el usuario está escribiendo la confirmación, limpiar el error
    if (e.target.name === "confirmPassword") {
      setErrors((prev) => ({ ...prev, confirmPassword: "" }));
    }
  };

  // Validación de coincidencia de contraseña al perder el foco
  const handleConfirmPasswordBlur = () => {
    if (formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: t("passwordMismatch"), // Mensaje de error si no coinciden
      }));
    }
  };

  // Validación del formulario
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = t("firstNameRequired");
    if (!formData.lastName) newErrors.lastName = t("lastNameRequired");
    if (!formData.email) newErrors.email = t("emailRequired");
    if (!formData.password) newErrors.password = t("passwordRequired");
    if (!formData.phone) newErrors.phone = t("phoneRequired");

    // Validación de la confirmación de contraseña
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t("passwordMismatch");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      register(formData);
    }
  };

  return (
    <Container maxWidth="md" className={classes.registerContainer}>
      <Paper
        elevation={8}
        className={classes.registerPaper}
        sx={{ padding: 4, borderRadius: 4 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          {t("register")}
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={2}>
            {/* Nombre y Apellido */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label={t("firstName")}
                name="firstName"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label={t("lastName")}
                name="lastName"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>

            {/* Email y Teléfono */}
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label={t("phone")}
                name="phone"
                type="tel"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            {/* Contraseña y Confirmación */}
            <Grid item xs={12} md={6}>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label={t("confirmPassword")}
                name="confirmPassword"
                type="password"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleConfirmPasswordBlur} // ✅ Valida al perder el foco
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Grid>

            {/* Fecha de Nacimiento y País */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("birthdate")}
                name="birthdate"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("country")}
                name="country"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            {/* Ciudad y Avatar */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("city")}
                name="city"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("avatar")}
                name="avatar"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            {/* LinkedIn y GitHub */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("linkedIn")}
                name="linkedIn"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label={t("gitHub")}
                name="gitHub"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            {/* Botones */}
            <Grid item xs={12} className={classes.buttonContainer}>
              {loading ? (
                <CircularProgress />
              ) : (
                <>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, py: 1.5 }}
                    onClick={handleSubmit}
                  >
                    {t("registerButton")}
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 2, py: 1.5 }}
                    onClick={() => navigate("/login")}
                  >
                    {t("goToLogin")}
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default RegisterView;

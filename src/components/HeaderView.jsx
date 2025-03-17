import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import useStyles from "../styles/HeaderStyles"; // Importamos los estilos

function HeaderView({
  user,
  logoutRequest,
  isDarkMode,
  setTheme,
  setLanguage,
  getTheme,
}) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  // Manejo de menú de usuario
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Función para cambiar el idioma
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleTheme = () => {
    const theme = getTheme;
    console.log(theme);
    setTheme(
      theme === "light" ? "dark" : theme === "dark" ? "custom" : "light"
    );
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Selector de Idioma */}
        <Select
          value={i18n.language}
          onChange={changeLanguage}
          className={classes.languageSelector}
        >
          <MenuItem value="es">🇪🇸 {t("spanish")}</MenuItem>
          <MenuItem value="ca">🇨🇦 {t("catalan")}</MenuItem>
          <MenuItem value="en">🇬🇧 {t("english")}</MenuItem>
        </Select>

        {/* Menú del Usuario */}
        {user && (
          <Box className={classes.userMenu}>
            <IconButton onClick={handleMenuOpen}>
              <Avatar className={classes.avatar}>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={t("avatar")}
                    className={classes.avatarImg}
                  />
                ) : (
                  `${user?.firstName || "?"}${user?.lastName || "?"}`
                )}
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Typography className={classes.userName}>
                {user ? `${user.firstName} ${user.lastName}` : t("guest")}
              </Typography>

              {/* Opción de cambiar tema solo si está logueado */}
              <MenuItem>
                {isDarkMode ? (
                  <Brightness7 className={classes.icon} />
                ) : (
                  <Brightness4 className={classes.icon} />
                )}
                {t("changeTheme")}
              </MenuItem>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={toggleTheme}
                >
                  Cambiar Tema
                </Button>
              </div>
              <MenuItem onClick={() => logoutRequest()}>{t("logout")}</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderView;

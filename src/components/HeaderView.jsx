import { use, useEffect, useState } from "react";
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

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import useStyles from "../styles/HeaderStyles"; // Importamos los estilos

import SpainFlag from "../assets/img/Flag_of_Spain.svg";
import CataloniaFlag from "../assets/img/Flag_of_Catalonia.svg";
import UKFlag from "../assets/img/Flag_of_the_United_Kingdom.svg";

function HeaderView({
  user,
  logoutRequest,
  setTheme,
  setLanguage,
  getLenguage,
  getTheme,
}) {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const isDarkMode = getTheme === "dark";
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
      theme === "light" ? "dark" : theme === "dark" && user ? "custom" : "light"
    );
  };
  const [languageSelected, setLanguageSelected] = useState(getLenguage);

  const handleChangeLenguage = (event) => {
    setLanguageSelected(event.target.value);
    setLanguage(event.target.value);
    changeLanguage(event);
  };

  const flagMap = {
    es: SpainFlag,
    ca: CataloniaFlag,
    en: UKFlag,
  };
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Selector de Idioma */}
        <Select
          value={languageSelected}
          className={classes.languageSelector}
          onChange={handleChangeLenguage}
          renderValue={(selected) => (
            <img
              src={flagMap[selected]}
              alt="Selected Language"
              style={{ width: 24, height: 16 }}
            />
          )}
        >
          <MenuItem value="es">
            <img
              src={SpainFlag}
              alt="Spain Flag"
              style={{ width: 20, marginRight: 8 }}
            />
            Español
          </MenuItem>
          <MenuItem value="ca">
            <img
              src={CataloniaFlag}
              alt="Catalonia Flag"
              style={{ width: 20, marginRight: 8 }}
            />
            Català
          </MenuItem>
          <MenuItem value="en">
            <img
              src={UKFlag}
              alt="UK Flag"
              style={{ width: 20, marginRight: 8 }}
            />
            English
          </MenuItem>
        </Select>
        <MenuItem>
          {isDarkMode ? (
            <Brightness7 className={classes.icon} onClick={toggleTheme} />
          ) : (
            <Brightness4 className={classes.icon} onClick={toggleTheme} />
          )}
        </MenuItem>
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
              <MenuItem
                onClick={() => {
                  setAnchorEl(null);
                  logoutRequest();
                }}
              >
                {t("logout")}
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderView;

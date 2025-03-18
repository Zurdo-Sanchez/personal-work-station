import React from "react";
import useSidebarStyles from "../styles/SidebarStyles";

const SidebarView = ({ open, toggleSidebar }) => {
  const classes = useSidebarStyles({ open });

  return (
    <>
      <button className={classes.toggleButton} onClick={toggleSidebar}>
        {open ? "Cerrar" : "Abrir"}
      </button>
      <div className={classes.sidebar}>
        <div className={classes.menuItem}>Dashboard</div>
        <div className={classes.menuItem}>Emails</div>
        <div className={classes.menuItem}>To-Do</div>
        <div className={classes.menuItem}>Notas</div>
        <div className={classes.menuItem}>Configuración</div>
      </div>
    </>
  );
};

export default SidebarView;

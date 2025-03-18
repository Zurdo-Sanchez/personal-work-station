import { makeStyles } from "@mui/styles";

const useSidebarStyles = makeStyles((theme) => ({
  sidebar: {
    width: "100%",

    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    display: "flex",
    flexDirection: "column",
  },
  toggleButton: {
    position: "fixed",
    top: 20,
    left: 20,
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: 4,
    cursor: "pointer",
    zIndex: 1300,
  },
  menuItem: {
    padding: "16px 24px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#34495e",
    },
  },
}));

export default useSidebarStyles;

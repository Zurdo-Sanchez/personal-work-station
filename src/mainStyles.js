import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "html, body, #root": {
      height: "100%",
      margin: 0,
    },
  },
  container: {
    display: "grid",
    gridTemplateRows: "70px 1fr 30px",
    width: "100%",
    height: "100vh",
  },
}));

export default useStyles;

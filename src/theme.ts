import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { create } from "domain";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

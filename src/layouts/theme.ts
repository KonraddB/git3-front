import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6b7280",
    },
    secondary: {
      main: "#14FFEC",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: 30,
      fontWeight: 500,
      color: "#ffffff",
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
        focused: {
          color: "#ffffff",
        },
      },
    },
  },
});

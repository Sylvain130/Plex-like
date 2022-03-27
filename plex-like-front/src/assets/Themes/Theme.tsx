import { createTheme, PaletteMode } from "@mui/material";

const grey: string = "#a9a9a9";
const black: string = "#181818";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            default: "#1e1e1eee",
            paper: "#141414",
          },

          text: {
            primary: "#F0F8FF",
            secondary: "#fefefe",
          },

          primary: {
            main: black,
            light: black,
            dark: black,
          },
          
          secondary: {
            main: grey,
            light: grey,
            dark: grey,
          },


        }
      : {
          // palette values for dark mode
          background: {
            default: "#1e1e1ee6",
            paper: "#262626b0",
          },

          text: {
            primary: "#F0F8FF",
            secondary: "#fefefe",
          },

          primary: {
            main: black,
            light: black,
            dark: black,
          },
          
          secondary: {
            main: grey,
            light: grey,
            dark: grey,
          },

        }),
  },

  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: grey,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: grey,
          fontSize: "0.8rem",
        },
      },
    },
  },
});

const theme = createTheme(getDesignTokens("dark"));

export default theme;

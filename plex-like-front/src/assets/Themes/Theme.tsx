import { createTheme, PaletteMode } from "@mui/material";

const color1: string = "#a9a9a9";
const color2: string = "#181818";

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
            main: color2,
            light: color2,
            dark: color2,
          },
          
          secondary: {
            main: color1,
            light: color1,
            dark: color1,
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
            main: color2,
            light: color2,
            dark: color2,
          },
          
          secondary: {
            main: color1,
            light: color1,
            dark: color1,
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
          color: color1,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: color1,
          fontSize: "0.8rem",
        },
      },
    },
  },
});

const theme = createTheme(getDesignTokens("dark"));

export default theme;

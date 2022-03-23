import { createTheme, PaletteMode } from "@mui/material";

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
                default: '#1e1e1eee'
            },

            text: {
              primary: '#F0F8FF',
              secondary: '#fefefe',
            },
          }
        : {
            // palette values for light mode
            background: {
                default: '#1e1e1eee'
            },

            text: {
              primary: '#F0F8FF',
              secondary: '#fefefe',
            },
          }),
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
            },
          },
        },
      },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks

const theme = createTheme(getDesignTokens('dark'));
 
export default theme;

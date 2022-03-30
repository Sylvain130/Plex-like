import { createTheme, PaletteMode } from "@mui/material";

const grey: string = '#a9a9a9';
const black: string = '#181818';

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            background: {
                default: '#1e1e1eee',
                paper: '#141414',
            },

            text: {
              primary: '#F0F8FF',
              secondary: '#fefefe',
            },
          }

        : {
            // palette values for light mode
            background: {
                default: '#1e1e1ee6',
                paper: '#262626b0',
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
              color: grey,
              border: `0.1rem solid ${black}`,
              
            

            },
          },
        },
        
      },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks

const theme = createTheme(getDesignTokens('dark'));
 
export default theme;

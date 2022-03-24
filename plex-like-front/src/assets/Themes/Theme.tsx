import { createTheme, PaletteMode } from "@mui/material";

const color1: string = '#a9a9a9';
const color2: string = '#181818';

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

            other:{
              primary: '#1e1e1eee',
              secondary: '#141414',
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

            other:{
              primary: color2,
              secondary: color1,
            },
          }),
    },
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '1rem',
              color: color1,
              border: '1px solid'+ color2,
              
            

            },
          },
        },
        
      },
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks

const theme = createTheme(getDesignTokens('dark'));
 
export default theme;

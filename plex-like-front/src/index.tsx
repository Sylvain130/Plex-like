import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import reportWebVitals from "./reportWebVitals";
import Router from "./router/Router";
import Routes from "./router/Routes";
import theme from "./assets/Themes/Theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Box>
      <CssBaseline />
      <React.StrictMode>
        <Router routes={Routes} />
      </React.StrictMode>
    </Box>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

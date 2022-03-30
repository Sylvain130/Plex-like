import { Box, SxProps } from "@mui/material";
import React from "react";
import theme from "../../../assets/Themes/Theme";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";

const styleTopbar: SxProps = {
  bgcolor: theme.palette.background.paper,
  width: "100%",
  height: "10%",
  maxHeight: "4rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",

  "& > *": {
    padding: "0.6rem",
  },
};

const styleLogo: SxProps = {
  height: "10%",
  maxHeight: "4rem",
};

const Topbar = (): JSX.Element => {
  return (
    <Box className="topbar" sx={styleTopbar}>
      <Box component="img" sx={styleLogo} alt="logo" src="./plex-logo.png" />
      <Navigation />
      <Searchbar />
    </Box>
  );
};

export default Topbar;

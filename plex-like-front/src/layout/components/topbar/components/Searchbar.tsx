import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";

const StyleSearchBar: SxProps = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: 'right',
};

const StyleIcon: SxProps = {
  position: "relative",
  top: "0px",
  left: "30px",
};

const StyleTextInput: SxProps = {
  color: "inherit",
  height: "100%",
  "& .MuiInputBase-input": {
    padding: "0.55rem",
    paddingLeft: "2rem",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
};

export default function SearchAppBar() {
  return (
    <Box sx={StyleSearchBar}>
      <SearchIcon sx={StyleIcon} />
      <TextField
        sx={StyleTextInput}
        placeholder="Rechercher..."
        inputProps={{ "aria-label": "Rechercher" }}
      />
    </Box>
  );
}

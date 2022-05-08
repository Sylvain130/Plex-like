import { alpha, SxProps } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";

export const styleContentMore: SxProps = {
  
  position: "absolute",
  right: "50%",
  top: "20%",
  transform: "translate(50%)",

  zIndex: "1",
  display: "grid",
  gridTemplateColumns: "43% 57%",
  gridTemplateRows: "81% 19%",

  margin: "0rem",
  background: alpha(theme.palette.background.paper, 0.95),

  boxShadow:"inset 0 0 0 0.06rem",
  color: theme.palette.primary.main,
	boxSizing: "border-box",
  width: "100%",

  animationDuration: "0.5s",
  animationName: "glissement",
  animationIterationCount: "1",
  animationFillMode: "forwards",

  "@keyframes glissement": {
    "0%": {
      width: "25rem",
      height: "21rem",
    },

    "100%": {
      width: "40rem",
      height: "30rem",
    },
  },

  "& >*": {
    padding: "0.3rem",
  },

  "& .poster": {
    width: "100%",
    height: "100%",
    gridColumn: "1 / 2",
    gridRow: "1",
  },

  "&  .closeButton": {
    margin: "0.3rem 0.3rem auto auto",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gridColumn: "2",
    gridRow: "1",
  },

  "& .presentation": {
    fontSize: "1.1rem",

    gridColumn: "2 / 2",
    gridRow: "1",
  },

  "& .additionalInfo": {
    gridColumn: "1 / 3",
    gridRow: "2",
  },

  "& .playButton": {
    gridColumn: "1 / 2",
    gridRow: "1",
  },

  "& .episode": {
    padding: "0",
    margin: "0",
    width: "100%",

    gridColumn: "1/3",
    gridRow: "4",
  },
};

import { alpha, SxProps } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";

export const styleSerieMore: SxProps = {
  
  position: "absolute",
  right: "50%",
  top: "20%",
  transform: "translate(50%)",

  zIndex: "1",
  display: "grid",
  gridTemplateColumns: "43% 57%",
  gridTemplateRows: "81% 19%",

  margin: "5px",
  background: alpha(theme.palette.background.paper, 0.95),
  border: "1px solid",
  borderColor: theme.palette.primary.main,

  animationDuration: "1s",
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
    padding: "5px",
  },

  "& .poster": {
    width: "100%",
    height: "100%",
    gridColumn: "1 / 2",
    gridRow: "1",
  },

  "&  .closeButton": {
    margin: "5px 5px auto auto",
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
    margin: "0",
    width: "100%",

    gridColumn: "1/3",
    gridRow: "4",
  },
};

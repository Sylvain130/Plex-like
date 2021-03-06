import { alpha, SxProps } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";

export const styleContentHover: SxProps = {
  margin: "0.3rem",
  background: alpha(theme.palette.background.paper, 0.95),
  border: "0.06rem solid",
  borderColor: theme.palette.primary.main,

  width: "8rem",
  height: "13rem",
  transition: theme.transitions.create(["height", "width"], {
    duration: "0.7s",
  }),

  display: "grid",
  gridTemplateRows: "92% 8%",
  gridTemplateColumns: "100%",

  "& .poster": {
    transition: theme.transitions.create(["height", "width", "padding"], {
      duration: "0.6s",
    }),
    margin: "0",
    width: "calc(8rem - 0.125rem)",
    height: "11.4rem",
    gridRow: "1",
  },

  "& .titleDate": {
    transition: theme.transitions.create(["visibility"], { delay: "1s" }),
    textAlign: "center",
    position: "relative",
    bottom: "0.3rem",
    visibility: "visible",
    opacity: "1",
    gridRow: "2",
  },

  "& .playButton, .episode, .additionalInfo, .presentation, .playButton, .moreButton":
    {
      visibility: "hidden",
      opacity: "0",
    },
  
  "&:hover ": {
    width: "25rem",
    height: "21rem",
    display: "grid",
    gridTemplateColumns: "43% 57%",
    gridTemplateRows: "71% 29%",
    zIndex: "1",

    "& >*": {
      padding: "0.3rem",
    },

    "& .poster": {
      width: "10.7rem",
      height: "calc(10.7rem/0.7)",

      gridColumn: "1 / 2",
      gridRow: "1",
    },

    "& .titleDate": {
      opacity: "0",
      visibility: "hidden",
    },

    "& .presentation, .additionalInfo, .playButton, .episode, .playButton, .moreButton":
      {
        transition: theme.transitions.create(["opacity"], {
          duration: "0.3s",
          delay: "0.5s",
        }),
        opacity: "1",
        visibility: "visible",
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

    "& .moreButton": {
      margin: "auto 0.6rem 0.6rem auto",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      gridColumn: "2",
      gridRow: "2",
    },
  },
};

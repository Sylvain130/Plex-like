import { alpha, SxProps } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";

export const styleContentHoverPopup: SxProps = {
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
};

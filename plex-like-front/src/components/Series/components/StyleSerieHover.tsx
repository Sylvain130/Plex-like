import { alpha, SxProps } from "@mui/material";
import theme from "../../../assets/Themes/Theme";


export const styleSeriesHover: SxProps = {
    margin: "5px",
    background: alpha(theme.palette.background.paper, 0.95),
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    transition: theme.transitions.create(["height", "width"], { duration: "1s" }),
    width: "8rem",
    height: "13rem",
  
    "& .poster": {
      transition: theme.transitions.create(["height", "width", "margin"], {
        duration: "0.8s",
      }),
      margin: "0px",
      width: "calc(8rem - 2px)",
      height: "11.4rem",
    },
  
    "& .titleDate": {
      transition: theme.transitions.create(["visibility"], { delay: "1s" }),
      textAlign: "center",
      position: "relative",
      bottom: "5px",
      visibility: "visible",
      opacity: "1",
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
      gridTemplateColumns: "45% 55%",
      gridTemplateRows: "70% 30%", 
      zIndex:"1",
  
      "& >*": {
        margin: "5px",
      },
  
      "& .poster": {
        width: "10rem",
        height: "14.3rem",
  
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
            duration: "0.5s",
            delay: "0.7s",
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
        margin: "auto 10px 10px auto",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        gridColumn: "2",
        gridRow: "2",
      },
  
      "& .episode": {
        margin: "-1px",
        width: "calc(100% + 2px)",
  
        gridColumn: "1/3",
        gridRow: "4",
      },
    },
  };
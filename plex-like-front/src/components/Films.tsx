import { alpha } from "@mui/material/styles";
import { Box, Button, Rating, SxProps, Typography } from "@mui/material";
import theme from "../assets/Themes/Theme";
import moment from "moment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

interface IFilms {
  title: string;
  description: string;
  date: string;
  realisator: string;
  Actor: string[];
  publicmark: number;
}

const styleFilms: SxProps = {
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
  "& .description, .title": {
    visibility: "hidden",
    opacity: "0",
  },
  "& .titleDate": {
    transition: theme.transitions.create(["visibility"], { delay: "1s" }),
    textAlign: "center",
    position: "relative",
    bottom: "5px",
    visibility: "visible",
    opacity: "1",
  },

  "& .realisator, .actor, .mark, .playButton": {
    transition: theme.transitions.create(["opacity"], {
      duration: "0.5s",
      delay: "0.7s",
    }),
    visibility: "hidden",
    opacity: "0",
  },

  "&:hover ": {
    width: "25rem",
    height: "21rem",
    display: "grid",
    gridTemplateColumns: "45% 55%",
    gridTemplateRows: "10% 60% 15% 15%",
    zIndex: "1",

    "& >*": {
      margin: "auto 5px",
    },

    "& .poster": {
      width: "10rem",
      height: "14.3rem",

      gridColumn: "1 / 2",
      gridRow: "1/3",
    },

    "& .titleDate": {
      opacity: "0",
      visibility: "hidden",
    },

    "& .title, .description": {
      transition: theme.transitions.create(["opacity"], {
        duration: "0.5s",
        delay: "0.7s",
      }),
      opacity: "1",
      visibility: "visible",
    },

    "& .title": {
      margin: "auto",
      fontSize: "1.1rem",

      gridColumn: "2 / 2",
      gridRow: "1",
    },

    "& .description": {
      top: "5px",
      textAlign: "justify",

      gridColumn: "2 / 2",
      gridRow: "2",
    },

    "& .realisator, .actor, .mark, .playButton": {
      transition: theme.transitions.create(["opacity"], {
        duration: "0.5s",
        delay: "0.7s",
      }),
      visibility: "visible",
      opacity: "1",
    },

    "& .realisator": {

      gridColumn: "1 / 2",
      gridRow: "3",
    },

    "& .playButton":{
      gridColumn: "1 / 2",
      gridRow: "1/3",
    },

    "& .actor": {
      gridColumn: "1 / 3",
      gridRow: "4",
    },

    "& .mark": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      gridColumn: "2",
      gridRow: "3",
    },
  },
};



const Films = ({
  title,
  description,
  date,
  realisator,
  Actor,
  publicmark,
}: IFilms): JSX.Element => {
  return (
    <Box sx={styleFilms}>
      <Box
        className="poster"
        component="img"
        sx={{ maxWidth: "10rem" }}
        alt="logo"
        src="./affiche-avengers.png"
      />

      <Typography className="titleDate">
        {title} - {moment(date).format("YYYY")}
      </Typography>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
      <Box className="mark">
        <Typography>{publicmark}/5 : </Typography>
        <Rating
          className="stars"
          name="size-small"
          value={publicmark}
          precision={0.5}
          readOnly
        />
      </Box>
      <Typography className="realisator">Réalisateur: {realisator}</Typography>
      <Typography className="actor">
        Acteurs: {Actor[0]} / {Actor[1]} / {Actor[2]} / {Actor[3]}
      </Typography>
      <Button className="playButton" variant="text"> <PlayCircleOutlineIcon sx={{transform: "scale(2.5)"}}/>
      </Button>
    </Box>
  );
};
export default Films;

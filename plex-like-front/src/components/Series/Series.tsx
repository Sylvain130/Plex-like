import { alpha } from "@mui/material/styles";
import { Box, Button, SxProps, Typography } from "@mui/material";
import theme from "../../assets/Themes/Theme";
import moment from "moment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Episode from "./components/episode/Episode";
import { saison } from "./components/episode/components/SaisonMenu";
import AdditionalInfo from "./components/AdditionalInfo";
import Presentation from "./components/Presentation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { styleSeriesHover } from "./components/StyleSerieHover";
import { StyleSerieMore } from "./components/StyleSerieMore";

interface ISeries {
  title: string;
  poster: string;
  description: string;
  date: string;
  realisator: string;
  actor: string[];
  publicmark: number;
  genre: string;
  saisons: saison[];
}
const Series = ({
  title,
  poster,
  description,
  date,
  realisator,
  actor,
  publicmark,
  genre,
  saisons,
}: ISeries): JSX.Element => {
  const [popup, setPopup] = useState(false);
 
  let styleSeries: SxProps;
  styleSeries= popup? StyleSerieMore :styleSeriesHover

  return (
      <Box className="Series" sx={styleSeries}>
        <Box
          className="poster"
          component="img"
          sx={{ maxWidth: "10rem" }}
          alt="logo"
          src={poster}
        />
        <Typography className="titleDate">
          {title} - {moment(date).format("YYYY")}
        </Typography>
        <Box className="presentation">
          <Presentation
            title={title}
            description={description}
            date={date}
            genre={genre}
          />
        </Box>
        <Box className="additionalInfo">
          <AdditionalInfo
            date={date}
            realisator={realisator}
            actor={actor}
            publicmark={publicmark}
          />
        </Box>
        <Button
          className="playButton"
          sx={{ width: "100%", height: "100%" }}
          variant="text"
        >
          <PlayCircleOutlineIcon sx={{ transform: "scale(2.5)" }} />
        </Button>
        <Button
          className="moreButton"
          onClick={() => {
            setPopup(true);
          }}
          sx={{ minHeight: "1em", minWidth: "1em" }}
          variant="text"
        >
          <ExpandMoreIcon sx={{ transform: "scale(2.5)" }} />
        </Button>
        {popup && <Box className="episode" visibility="hidden" >
          <Episode saisons={saisons} numSaison={1}/>
        </Box>}
      </Box>
  );
};
export default Series;

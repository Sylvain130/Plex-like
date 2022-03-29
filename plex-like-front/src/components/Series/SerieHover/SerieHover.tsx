import { alpha } from "@mui/material/styles";
import { Box, Button, SxProps, Typography } from "@mui/material";
import moment from "moment";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { saison } from "../components/episode/components/SaisonMenu";
import { StyleSerieMore } from "../components/StyleSerieMore";

interface ISerieHover {
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
const SerieHover = ({
  title,
  poster,
  description,
  date,
  realisator,
  actor,
  publicmark,
  genre,
  saisons,
}: ISerieHover): JSX.Element => {

  return (
      <Box className="Series" sx={styleSeriesHover}>
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
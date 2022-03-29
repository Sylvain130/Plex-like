import { Box, Button, SxProps, Typography } from "@mui/material";
import theme from "../../../../assets/Themes/Theme";
import SaisonMenu, { saison } from "./components/SaisonMenu";
import { alpha } from "@mui/material/styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

interface IEpisode {
  saisons: saison[];
  numSaison: number;
}
const Episode = ({ saisons, numSaison }: IEpisode): JSX.Element => {
  const nbEpisode: number = saisons[numSaison].nameEpisode.length;

  const styleEpisodes: SxProps = {
    background: alpha(theme.palette.background.paper, 0.95),
    border: "1px solid",
    borderColor: theme.palette.primary.main,

    display: "flex",
    flexDirection: "column",
  };

  const styleEpisode: SxProps = {
    border: "1px solid",
    borderColor: theme.palette.primary.main,

    display: "grid",
    gridTemplateColumns: "30% 70%",
  };

  const styleNameDurationEpisode: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    margin: "5px",
    gridColumn: "1",
    gridRow: "1",
  };

  const styleDescriptionEpisode: SxProps = {
    margin: "5px",
    gridColumn: "2",
    textAlign: "justify",
  };

  var episode: JSX.Element[];
  episode = [];
  for (let i = 0; i < nbEpisode; i++) {
    episode.push(
      <Box sx={styleEpisode} key={i}>
        <Box sx={styleNameDurationEpisode}>
          <Typography>{saisons[numSaison].nameEpisode[i]}</Typography>
          <Typography>
            Durée : {saisons[numSaison].durationEpisode[i]}
          </Typography>
          <Button
            className="playButton"
            sx={{ height: "80px", alignSelf: "center flex-end" }}
            variant="text"
          >
            <PlayCircleOutlineIcon sx={{ transform: "scale(2.5)" }} />
          </Button>
        </Box>
        <Typography sx={styleDescriptionEpisode}>
          {saisons[numSaison].descriptionEpisode[i]}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={styleEpisodes}>
      <Box sx={{ minheight: "none", margin: "auto auto auto 5px" }}>
        <SaisonMenu saisons={saisons} />
      </Box>
      {episode}
    </Box>
  );
};

export default Episode;

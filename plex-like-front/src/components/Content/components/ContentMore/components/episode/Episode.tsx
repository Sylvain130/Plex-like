import { Box, Button, SxProps, Typography } from "@mui/material";
import theme from "../../../../../../assets/Themes/Theme";
import SaisonMenu from "./components/SaisonMenu";
import { alpha } from "@mui/material/styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { ISaison } from "../../../../../../type/ISaison";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IEpisode {
  saisons: ISaison[];
  numSaison: number;
}
const Episode = ({ saisons, numSaison }: IEpisode): JSX.Element => {
  const nbEpisode: number = saisons[numSaison].nameEpisode.length;

  const styleEpisodes: SxProps = {
    background: alpha(theme.palette.background.paper, 0.95),
    border: "0.06rem solid",
    borderColor: theme.palette.primary.main,

    display: "flex",
    flexDirection: "column",
  };

  const styleEpisode: SxProps = {
    borderTop: "0.06rem solid",
    borderColor: theme.palette.primary.main,

    display: "grid",
    gridTemplateColumns: "30% 70%",
  };

  const styleNameDurationEpisode: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    margin: "0.3rem",
    gridColumn: "1",
    gridRow: "1",
  };

  const styleDescriptionEpisode: SxProps = {
    margin: "0.3rem",
    gridColumn: "2",
    textAlign: "justify",
  };

  const stylePlayButton: SxProps ={
    height: "5rem", 
    alignSelf: "center flex-end" 
  }

  const episode: JSX.Element[] = [];
  useEffect(() => {
    for (let i = 0; i < nbEpisode; i++) {
      episode.push(
        <Box sx={styleEpisode} key={uuidv4()}>
          <Box sx={styleNameDurationEpisode}>
            <Typography>{saisons[numSaison].nameEpisode[i]}</Typography>
            <Typography>
              Durée : {saisons[numSaison].durationEpisode[i]}
            </Typography>
            <Button
              className="playButton"
              sx={stylePlayButton}
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
  });

  return (
    <Box sx={styleEpisodes}>
      <Box sx={{ minheight: "none", margin: "auto auto auto 0.3rem" }}>
        <SaisonMenu saisons={saisons} />
      </Box>
      {episode}
    </Box>
  );
};

export default Episode;

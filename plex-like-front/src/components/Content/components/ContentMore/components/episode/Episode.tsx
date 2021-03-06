import { Box, Button, SxProps, Typography } from "@mui/material";
import theme from "../../../../../../assets/Themes/Theme";
import SaisonMenu from "./components/SaisonMenu";
import { alpha } from "@mui/material/styles";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { ISaison } from "../../../../../../type/ISaison";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface IEpisode {
  saisons: ISaison[];
}

const styleEpisode: SxProps = {
  borderTop: "0.06rem solid",
  borderColor: theme.palette.primary.main,
  margin: "0.3rem",
  gridColumn: "2",
  textAlign: "justify",
};

const styleEpisodes: SxProps = {
  width: "100%",

  background: alpha(theme.palette.background.paper, 0.95),
  border: "0.06rem solid",
  borderColor: theme.palette.primary.main,

  display: "flex",
  flexDirection: "column",
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

const stylePlayButton: SxProps = {
  height: "5rem",
  alignSelf: "center flex-end",
};


const Episode = ({saisons}: IEpisode): JSX.Element => {
  const { t } = useTranslation();

  const [numSaison, setNumSaison] = useState(1);
  const displayEpisode = () => {
    const episode: JSX.Element[] = [];
    const nbEpisode: number = saisons[numSaison-1].nameEpisode.length;

    for (let i = 0; i < nbEpisode; i++) {
      episode.push(
        <Box sx={styleEpisode} key={uuidv4()}>
          <Box sx={styleNameDurationEpisode}>
            <Typography>{saisons[numSaison-1].nameEpisode[i]}</Typography>
            <Typography>
              {t("ContentContentMoreEpisode.Duration", {duration:saisons[numSaison-1].durationEpisode[i]})}
            </Typography>
            <Button className="playButton" sx={stylePlayButton} variant="text">
              <PlayCircleOutlineIcon sx={{ transform: "scale(2.5)" }} />
            </Button>
          </Box>
          <Typography sx={styleDescriptionEpisode}>
            {saisons[numSaison-1].descriptionEpisode[i]}
          </Typography>
        </Box>
      );
    }
    return episode;
  };

  return (
    <Box sx={styleEpisodes}>
      <SaisonMenu saisons={saisons} setNumSaison={setNumSaison} numSaison={numSaison}    />
      {displayEpisode()}
    </Box>
  );
};

export default Episode;

import { Box, Button } from "@mui/material";
import AdditionalInfo from "./components/AdditionalInfo";
import Presentation from "./components/Presentation";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { ISerieInfo } from "../../../../type/ISerieInfo";

interface ISerieInformation {
  serieInfo: ISerieInfo;
}
const SerieInformation = ({
  serieInfo: {
    title,
    poster,
    description,
    date,
    realisator,
    actor,
    publicmark,
    genre,
  },
}: ISerieInformation): JSX.Element => {
  return (
    <>
      <Box className="poster" component="img" alt="logo" src={poster} />

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
    </>
  );
};
export default SerieInformation;

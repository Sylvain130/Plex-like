import { styleSerieMore } from "./StyleSerieMore";
import { Box, Button, SxProps } from "@mui/material";
import Episode from "./components/episode/Episode";
import SerieInformation from "../SerieInfo/SerieInformation";
import CloseIcon from "@mui/icons-material/Close";
import { ISerieInfo } from "../../../../type/ISerieInfo";
import { ISaison } from "../../../../type/ISaison";

interface ISerieMore {
  serieInfo: ISerieInfo;
  saisons: ISaison[];
  setPopup: (popup: boolean) => void;
}

const SerieMore = ({
  serieInfo,
  saisons,
  setPopup,
}: ISerieMore): JSX.Element => {
  return (
    <Box className="Series" sx={styleSerieMore}>
      <Button
        className="closeButton"
        onClick={() => setPopup(false)}
        sx={{ minHeight: "1em", minWidth: "1em" }}
        variant="text"
      >
        <CloseIcon sx={{ transform: "scale(1.5)" }} />
      </Button>
      <SerieInformation serieInfo={serieInfo} />
      <Box className="episode">
        <Episode saisons={saisons} numSaison={1} />
      </Box>
    </Box>
  );
};
export default SerieMore;

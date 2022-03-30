import { Box, Button, Typography } from "@mui/material";
import { styleSeriesHover } from "./StyleSerieHover";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SerieInformation from "../SerieInfo/SerieInformation";
import moment from "moment";
import { ISerieInfo } from "../../../../type/ISerieInfo";
import { ISaison } from "../../../../type/ISaison";

interface ISerieHover {
  serieInfo: ISerieInfo;
  saisons: ISaison[];
  setPopup: (popup: boolean) => void;
}
const SerieHover = ({
  serieInfo,
  saisons,
  setPopup,
}: ISerieHover): JSX.Element => {
  return (
    <Box className="Series" sx={styleSeriesHover}>
      <SerieInformation serieInfo={serieInfo} />
      <Typography className="titleDate">
        {serieInfo.title} - {moment(serieInfo.date).format("YYYY")}
      </Typography>
      <Button
        className="moreButton"
        onClick={() => setPopup(true)}
        sx={{ minHeight: "1em", minWidth: "1em" }}
        variant="text"
      >
        <ExpandMoreIcon sx={{ transform: "scale(2.5)" }} />
      </Button>
    </Box>
  );
};
export default SerieHover;

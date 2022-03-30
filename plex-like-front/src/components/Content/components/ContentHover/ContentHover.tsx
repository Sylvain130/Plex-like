import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Typography } from "@mui/material";
import moment from "moment";
import { IContentInfo } from "../../../../type/IContentInfo";
import ContentInformation from "../ContentInfo/ContentInformation";
import { styleSeriesHover } from "./StyleContentHover";

interface IContentHover {
  contentInfo: IContentInfo;
  setPopup: (popup: boolean) => void;
}
const SerieHover = ({
  contentInfo,
  setPopup,
}: IContentHover): JSX.Element => {
  return (
    <Box className="Series" sx={styleSeriesHover}>
      <ContentInformation contentInfo={contentInfo} />
      <Typography className="titleDate">
        {contentInfo.title} - {moment(contentInfo.date).format("YYYY")}
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

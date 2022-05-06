import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, SxProps, Typography } from "@mui/material";
import moment from "moment";
import { IContentInfo } from "../../../../type/IContentInfo";
import ContentInformation from "../ContentInfo/ContentInformation";
import { styleContentHover } from "./StyleContentHover";

interface IContentHover {
  contentInfo: IContentInfo;
  setPopup: (popup: boolean) => void;
}

const styleButton: SxProps = {
  minHeight: "1em",
  minWidth: "1em",
};
const ContentHover = ({ contentInfo, setPopup }: IContentHover): JSX.Element => {
  return (
    <Box className="Series" sx={styleContentHover}>
      <ContentInformation contentInfo={contentInfo} />
      <Typography className="titleDate">
        {contentInfo.title} - {moment(contentInfo.date).format("YYYY")}
      </Typography>
      <Button
        className="moreButton"
        aria-label="moreButton"
        onClick={() => setPopup(true)}
        sx={styleButton}
        variant="text"
      >
        <ExpandMoreIcon sx={{ transform: "scale(2.5)" }} />
      </Button>
    </Box>
  );
};
export default ContentHover;

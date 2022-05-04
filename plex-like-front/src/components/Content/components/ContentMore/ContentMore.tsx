import { styleContentMore } from "./StyleContentMore";
import { Box, Button, SxProps } from "@mui/material";
import Episode from "./components/episode/Episode";
import ContentInformation from "../ContentInfo/ContentInformation";
import CloseIcon from "@mui/icons-material/Close";
import { IContentInfo } from "../../../../type/IContentInfo";
import { ISaison } from "../../../../type/ISaison";

interface ISerieMore {
  contentInfo: IContentInfo;
  saisons?: ISaison[];
  setPopup: (popup: boolean) => void;
}

const styleButton: SxProps ={
  minHeight: "1rem", 
  minWidth: "1rem"
}
const ContentMore = ({
  contentInfo,
  saisons,
  setPopup,
}: ISerieMore): JSX.Element => {
  return (
    <Box className="Series" sx={styleContentMore}>
      <ContentInformation contentInfo={contentInfo} />
      {saisons && (
        <>
        <Button
          className="closeButton"
          onClick={() => setPopup(false)}
          sx={styleButton}
          variant="text"
        >
          <CloseIcon sx={{ transform: "scale(1.5)" }} />
        </Button>
        <Box className="episode">
          <Episode saisons={saisons} numSaison={1} />
        </Box>
        </>
      )}
    </Box>
  );
};
export default ContentMore;

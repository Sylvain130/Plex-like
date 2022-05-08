import ContentHover from "./components/ContentHover/ContentHover";
import ContentMore from "./components/ContentMore/ContentMore";
import { IContentInfo } from "../../type/IContentInfo";
import { ISaison } from "../../type/ISaison";

interface ISeries {
  contentInfo: IContentInfo;
  saisons?: ISaison[];
  setPopup: (popup: boolean) => void;
  popup: boolean;
}
const Content = ({ contentInfo, saisons, setPopup, popup }: ISeries): JSX.Element => {

  return (
    <>
      <ContentHover contentInfo={contentInfo} setPopup={setPopup} popup={popup}/>
      {popup && (
        <ContentMore
          contentInfo={contentInfo}
          saisons={saisons}
          setPopup={setPopup}
        />
      )}
    </>
  );
};
export default Content;

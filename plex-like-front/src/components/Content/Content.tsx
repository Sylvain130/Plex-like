import { useState } from "react";
import ContentHover from "./components/ContentHover/ContentHover";
import ContentMore from "./components/ContentMore/ContentMore";
import { IContentInfo } from "../../type/IContentInfo";
import { ISaison } from "../../type/ISaison";

interface ISeries {
  contentInfo: IContentInfo;
  saisons?: ISaison[];
}
const Content = ({ contentInfo, saisons }: ISeries): JSX.Element => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <ContentHover contentInfo={contentInfo} setPopup={setPopup} />
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

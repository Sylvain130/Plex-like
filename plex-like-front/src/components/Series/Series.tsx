import { useState } from "react";
import SerieHover from "./components/SerieHover/SerieHover";
import SerieMore from "./components/SerieMore/SerieMore";
import SerieInformation from "./components/SerieInfo/SerieInformation";
import { ISerieInfo } from "../../type/ISerieInfo";
import { ISaison } from "../../type/ISaison";

interface ISeries {
  serieInfo: ISerieInfo;
  saisons: ISaison[];
}
const Series = ({
  serieInfo,
  saisons,
}: ISeries): JSX.Element => {
  const [popup, setPopup] = useState(false);
 
  if (popup){
  return (
    <>
    <SerieMore 
      serieInfo={serieInfo}
      saisons={saisons}
      setPopup={setPopup}/>
    <SerieHover 
      serieInfo={serieInfo}
      saisons={saisons}
      setPopup={setPopup}/>
    </>
  );
}
else{
  return (
    <SerieHover  
    serieInfo={serieInfo}
    saisons={saisons}
    setPopup={setPopup}/>

  );
}
};
export default Series;

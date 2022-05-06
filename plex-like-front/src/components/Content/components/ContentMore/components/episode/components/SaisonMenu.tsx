import * as React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";
import { ISaison } from "../../../../../../../type/ISaison";
import { useTranslation } from "react-i18next";

interface ISaisonMenu {
  saisons: ISaison[];
  setNumSaison: (numSaison: number) => void;
  numSaison: number;
}

const styleForm: SxProps = {
  width: "20%",
  maxWidth: "8rem",
  margin: "0.6rem",
};

const SaisonMenu = ({ saisons, setNumSaison, numSaison}: ISaisonMenu): JSX.Element => {
  const { t } = useTranslation();
  const [numSaisonString, setNumSaisonString] = React.useState("1");
  const handleChange = (event: SelectChangeEvent) => {
    setNumSaisonString(event.target.value);
    setNumSaison(+numSaisonString);
  };

  return (
    <FormControl sx={styleForm}>
      <Select
        value={numSaisonString}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {saisons.map((c) => (
          <MenuItem key={c.numSaison} value={c.numSaison}>
            {t("ContentContentMoreEpisodeSaisonMenu.Season", {nbSaison: c.numSaison})}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SaisonMenu;

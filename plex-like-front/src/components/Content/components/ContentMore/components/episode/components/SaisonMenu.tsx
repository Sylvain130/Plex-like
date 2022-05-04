import * as React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";
import { ISaison } from "../../../../../../../type/ISaison";

interface ISaisonMenu {
  saisons: ISaison[];
}

const styleForm : SxProps = {
  minWidth: 120, 
  margin: "0.6rem"
}

const SaisonMenu = ({ saisons }: ISaisonMenu): JSX.Element => {
  const [numSaison, setNumSaison] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNumSaison(event.target.value);
  };
  return (
    <FormControl sx={styleForm}>
      <Select
        value={numSaison}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {saisons.map((c) => (
          <MenuItem key={c.numSaison} value={c.numSaison}>
            Saison {c.numSaison}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SaisonMenu;

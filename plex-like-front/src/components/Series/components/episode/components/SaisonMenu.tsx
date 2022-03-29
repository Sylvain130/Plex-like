
import * as React from 'react';
import {  FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

export type saison = {
  numSaison: number;
  nameEpisode: string[];
  durationEpisode: number[];
  descriptionEpisode: string[];
};

interface ISaisonMenu {
  saisons: saison[];
}



const SaisonMenu = ({saisons}: ISaisonMenu ): JSX.Element => {
  const [numSaison, setNumSaison] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setNumSaison(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 120, margin: "10px"}}>
        <Select
          value={numSaison}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {saisons.map((c) => (
          <MenuItem key={c.numSaison} value={c.numSaison}> Saison {c.numSaison} </MenuItem>
        ))}
        </Select>
      </FormControl>
    

  );
};

export default SaisonMenu;

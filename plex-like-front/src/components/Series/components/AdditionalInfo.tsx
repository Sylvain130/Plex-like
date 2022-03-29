import { Box, Rating, SxProps, Typography } from "@mui/material";

interface IAdditionalinfo {
  date: string;
  realisator: string;
  actor: string[];
  publicmark: number;
}

const styleAdditionalInfo: SxProps = {
  height: "100%",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "45% 55%",
  gridTemplateRows: "50% 50%",

  "& .actor": {
    maxWidth: "80%",
    gridColumn: "1 / 3",
    gridRow: "2",
  },

  "& .realisator": {
    gridColumn: "1",
    gridRow: "1",
  },

  "& .mark": {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",

    gridColumn: "2",
    gridRow: "1",
  },

};

const AdditionalInfo = ({
  date,
  realisator,
  actor,
  publicmark,
}: IAdditionalinfo): JSX.Element => {
  return (
    <Box sx={styleAdditionalInfo}>
      <Box className="mark">
        <Typography>{publicmark}/5 : </Typography>
        <Rating
          className="stars"
          name="size-small"
          value={publicmark}
          precision={0.5}
          readOnly
        />
      </Box>
      <Typography className="realisator">Réalisateur: {realisator}</Typography>
      <Typography className="actor">
        Acteurs: {actor[0]} / {actor[1]} / {actor[2]} / {actor[3]}
      </Typography>
    </Box>
  );
};

export default AdditionalInfo;
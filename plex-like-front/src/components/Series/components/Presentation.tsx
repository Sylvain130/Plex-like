import { Box, SxProps, Typography } from "@mui/material";
import moment from "moment";

interface IPresentation {
  title: string;
  description: string;
  date: string;
  genre: string;
}

const stylePresentation: SxProps = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  "& .title": {
    alignSelf: "Center",
    fontSize: "1.1rem",
  },

  "& .description": {
    margin: "5px auto",
    textAlign: "justify",
  },

  "& .genre": {
    margin: "5px 0 5px 0",
  },

  "& .date": {
    margin: "5px 0 5px 0",
  },
};

const Presentation = ({
  title,
  description,
  date,
  genre,
}: IPresentation): JSX.Element => {
  return (
    <Box sx={stylePresentation}>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
      <Typography className="genre">Genre : {genre}</Typography>
      <Typography className="date">
        Sortie : {moment(date).format("DD-MM-YYYY")}
      </Typography>
    </Box>
  );
};

export default Presentation;

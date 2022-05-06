import { Box, SxProps, Typography } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";

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
    margin: "0.3rem auto",
    textAlign: "justify",
  },

  "& .genre": {
    margin: "0.6rem 0 0.3rem 0",
  },

  "& .date": {
    margin: "0.06rem 0 0.3rem 0",
  },
};

const Presentation = ({
  title,
  description,
  date,
  genre,
}: IPresentation): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box sx={stylePresentation}>
      <Typography className="title">{title}</Typography>
      <Typography className="description">{description}</Typography>
      <Typography className="genre">
        {t("ContentContentInfoPresentation.Genre", {genre: genre})}
      </Typography>
      <Typography className="date">
        {t("ContentContentInfoPresentation.Release", {date: moment(date).format("DD-MM-YYYY")})}
      </Typography>
    </Box>
  );
};

export default Presentation;

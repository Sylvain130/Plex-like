import { Box, Button, SxProps } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import { useTranslation } from "react-i18next";

const styleNavigation: SxProps = {
  width: "50%",
  maxWidth: "30rem",
  display: "flex",
  justifyContent: "space-around",
};

const styleButton: SxProps = {
  padding: "0.3rem,0.6rem",
  margin: "0.6rem",
};
const Navigation = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Box sx={styleNavigation}>
      <Button
        sx={styleButton}
        variant="outlined"
        startIcon={<HomeIcon />}
        component={Link}
        to="/Home"
      >
        {t("Acceuil")}
      </Button>
      <Button
        sx={styleButton}
        variant="outlined"
        startIcon={<MovieIcon />}
        component={Link}
        to="/Films"
      >
        {t("Films")}
      </Button>
      <Button
        sx={styleButton}
        variant="outlined"
        startIcon={<MovieIcon />}
        component={Link}
        to="/Series"
      >
        {t("Séries")}
      </Button>
    </Box>
  );
};

export default Navigation;

import { Box, Button, SxProps } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import { useTranslation } from "react-i18next";
import theme from "../../../../assets/Themes/Theme";

const styleNavigation: SxProps = {
  width: "50%",
  maxWidth: "30rem",
  display: "flex",
  justifyContent: "space-around",
};

const styleButton: SxProps ={
    padding: '5px,10px',
    margin: '5px',
    border: "1px solid" + theme.palette.primary.main,
}
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
        {t("LayoutTopbarNavigation.Home")}
      </Button>
      <Button
        sx={styleButton}
        variant="outlined"
        startIcon={<MovieIcon />}
        component={Link}
        to="/Films"
      >
        {t("LayoutTopbarNavigation.Films")}
      </Button>
      <Button
        sx={styleButton}
        variant="outlined"
        startIcon={<MovieIcon />}
        component={Link}
        to="/Series"
      >
        {t("LayoutTopbarNavigation.Series")}
      </Button>
    </Box>
  );
};

export default Navigation;

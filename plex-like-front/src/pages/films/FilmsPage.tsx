import { useTranslation } from "react-i18next";

const FilmsPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Voici le texte de la page film")}</h1>
    </div>
  );
};
export default FilmsPage;

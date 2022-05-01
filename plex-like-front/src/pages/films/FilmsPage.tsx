import { useTranslation } from "react-i18next";

const FilmsPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("FilmsPage.text")}</h1>
    </div>
  );
};
export default FilmsPage;

import { useTranslation } from "react-i18next";

const FilmsPage = (): JSX.Element => {
  const { t } = useTranslation();

const title: string = "Avengers";
const description: string =
  "Quand un ennemi inattendu fait surface pour menacer la sécurité et l'équilibre mondial, Nick Fury, directeur de l'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente.";
const date: string = "04-25-2012";
const realisator: string = "Joss Whedon";
const Actor: string[] = [
  "Robert Downey Jr.",
  "Scarlett Johansson",
  "Chris Evans",
  "Chris Hemsworth",
];
const publicmark: number = 4.1;

const stylePageFilms: SxProps = {
  display: "grid",
  gridGap: "0.4rem",
  gridTemplateColumns: "repeat(14,8rem)",
  gridTemplateRows: "repeat(10,13rem)",
};

var componentFilm: JSX.Element[];
componentFilm = [];
for (let i = 0; i < 100; i++) {
  componentFilm.push(
    <Films
      key={i}
      {...{ title, description, date, realisator, Actor, publicmark }}
    />
  );
}

const FilmsPage = (): JSX.Element => {
  return <Box sx={stylePageFilms}>{componentFilm}</Box>;
};

export default FilmsPage;
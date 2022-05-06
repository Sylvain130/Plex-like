import { Box, SxProps } from "@mui/material";
import { display } from "@mui/system";
import { useState } from "react";
import Content from "../../components/Content/Content";

const title: string = "Avengers";
const description: string =
  "Quand un ennemi inattendu fait surface pour menacer la sécurité et l'équilibre mondial, Nick Fury, directeur de l'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente.";
const date: string = "04-25-2012";
const realisator: string = "Joss Whedon";

const poster: string = "./affiche-avengers.png";
const actor: string[] = [
  "Robert Downey Jr.",
  "Scarlett Johansson",
  "Chris Evans",
  "Chris Hemsworth",
];
const publicmark: number = 4.1;
const genre: string = "Heroic fantasy";

const stylePageFilms: SxProps = {
  display: "grid",
  gridGap: "0.4rem",
  gridTemplateColumns: "repeat(14,8rem)",
  gridTemplateRows: "repeat(10,13rem)",
};

const FilmsPage = (): JSX.Element => {
  const [popup, setPopup] = useState(false);
  const displayContent = () => {
    var componentFilm: JSX.Element[];
    componentFilm = [];
    for (let i = 0; i < 100; i++) {
      componentFilm.push(
        <Content
          contentInfo={{
            title,
            poster,
            description,
            date,
            realisator,
            actor,
            publicmark,
            genre,
          }}
          setPopup={setPopup}
          popup={popup}
        />
      );
    }
    return componentFilm;
  };

  return <Box sx={stylePageFilms}>{displayContent()}</Box>;
};

export default FilmsPage;

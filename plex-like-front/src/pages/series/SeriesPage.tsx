import { Box, SxProps } from "@mui/material";
import { useState } from "react";
import Content from "../../components/Content/Content";
import { ISaison } from "../../type/ISaison";

const title: string = "The Witcher";
const poster: string = "./affiche-the-witcher.png";
const description: string =
  "Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.";
const date: string = "12-20-2019";
const realisator: string = "Lauren Schmidt Hissrich";
const actor: string[] = [
  "Henry Cavill",
  "Freya Allan",
  "Anya Chalotra",
  "MyAnna Buring",
];
const publicmark: number = 3.9;
const genre: string = "Heroic fantasy";
const saisons: ISaison[] = [
  {
    numSaison: 1,
    nameEpisode: [
      "Le début de la fin",
      "Quatre marks",
      "Lune de trahison",
      "Des banquets, des bâtards et des obsèques",
      "Désirs inassouvis",
      "Espèces rares",
      "Avant la chute",
      "Bien plus",
    ],
    durationEpisode: [61, 61, 67, 62, 59, 59, 47, 59],
    descriptionEpisode: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    ],
  },
  {
    numSaison: 2,
    nameEpisode: [
      "Un grain de vérité",
      "Kaer Mohren",
      "Tant de pertes",
      "Le renseignement rédanien",
      "Volte-face",
      "De chers amis",
      "Voleth Meir",
      "La Famille",
    ],
    durationEpisode: [61, 61, 67, 62, 59, 59, 47, 59],
    descriptionEpisode: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    ],
  },
];

const stylePageSeries: SxProps = {
  display: "grid",
  gridGap: "0.4rem",
  gridTemplateColumns: "repeat(14,8rem)",
  gridTemplateRows: "repeat(10,13rem)",
};

const SeriesPage = (): JSX.Element => {
  const [popup, setPopup] = useState(false);
  const displayContent = () => {
    var componentSerie: JSX.Element[];
    componentSerie = [];
    for (let i = 0; i < 5; i++) {
      componentSerie.push(
        <Content
          key={i}
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
          saisons={saisons}
          setPopup={setPopup}
          popup={popup}
        />
      );
    }
    return componentSerie;
  };
  return <Box sx={stylePageSeries}>{displayContent()}</Box>;
};

export default SeriesPage;

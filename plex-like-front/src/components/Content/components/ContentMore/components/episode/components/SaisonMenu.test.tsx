
import { fireEvent, screen, waitFor } from "@testing-library/react";
import SaisonMenu from "./SaisonMenu";
import { ISaison } from "../../../../../../../type/ISaison";
import { getI18n } from "react-i18next";
import CustomRender from "../../../../../../../CustomRender";

const i18n = getI18n();

const saisons: ISaison[] = [
  {
    numSaison: 1,
    nameEpisode: ["title1.1", "title1.2"],
    durationEpisode: [0, 0],
    descriptionEpisode: ["description1.1", "description1.2"],
  },
  {
    numSaison: 2,
    nameEpisode: ["title2.1", "title2.2"],
    durationEpisode: [0, 0],
    descriptionEpisode: ["description2.1", "description2.2"],
  },
];

const setNumSaison = jest.fn(numSaison => numSaison);

describe("test Saison Menu", function () {
  test("display select Saison", function () {
    CustomRender(<SaisonMenu saisons={saisons} setNumSaison={setNumSaison} numSaison={0} />);
    const testNumSaison1 = screen.getByText(
      `${i18n.t("ContentContentMoreEpisodeSaisonMenu.Season", {nbSaison: 1})}`
    );

    expect(testNumSaison1).toBeInTheDocument();
  });

  //TODO: test click select Saison
});

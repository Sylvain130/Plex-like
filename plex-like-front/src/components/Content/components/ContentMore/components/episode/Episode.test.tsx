import { screen } from "@testing-library/react";
import { ISaison } from "../../../../../../type/ISaison";
import Episode from "./Episode";
import CustomRender from "../../../../../../CustomRender";



jest.mock("./components/SaisonMenu", (): unknown => {
  return (): JSX.Element => <div data-testid="mockSaisonMenu" />;
});

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

describe("test Episode", function () {
  test("display Episodes", function () {
    CustomRender(<Episode saisons={saisons}/>);
    const testTitleEpisode11 = screen.getByText(`title1.1`);
    const testTitleEpisode12 = screen.getByText(`title1.2`);

    expect(testTitleEpisode11).toBeInTheDocument();
    expect(testTitleEpisode12).toBeInTheDocument();
  });

  test("display SaisonMenu", function () {
    CustomRender(<Episode saisons={saisons}/>);
    const testSaisonMenu = screen.getByTestId("mockSaisonMenu");
    expect(testSaisonMenu).toBeInTheDocument();
  });
});

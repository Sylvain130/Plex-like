import { render } from "@testing-library/react";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import ContentMore from "../ContentMore";
import { IContentInfo } from "../../../../../type/IContentInfo";
import { ISaison } from "../../../../../type/ISaison";

jest.mock("./episode/Episode.tsx", (): unknown => {
  return (): JSX.Element => <div data-testid="mockEpisode" />;
});
jest.mock("../../ContentInfo/ContentInformation.tsx", (): unknown => {
    return (): JSX.Element => <div data-testid="mockContentInformation" />;
  });


const setPopup = jest.fn(popup => popup=true);

const title: string = "title";
const description: string = "description";
const date: string = "2000";
const realisator: string = "realisator";
const poster: string = "./affiche-avengers.png";
const actor: string[] = ["actor1", "actor2", "actor3", "actor4"];
const publicmark: number = 0;
const genre: string = "genre";

const contentInfo: IContentInfo = {
  title,
  poster,
  description,
  date,
  realisator,
  actor,
  publicmark,
  genre,
};

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
  

describe("test Content More", function () {
  test("display ContentInformation", function () {
    render(<ContentMore contentInfo={contentInfo} setPopup={setPopup} />);
    const testContentInformation = screen.getByTestId("mockContentInformation");
    expect(testContentInformation).toBeInTheDocument();
  });

  test("display closeButton", function () {
    render(<ContentMore contentInfo={contentInfo} setPopup={setPopup} />);
    const testCloseButton = screen.getByLabelText("closeButton");
    expect(testCloseButton).toBeInTheDocument();
  });
  test("click closeButton", async function () {
    render(<ContentMore contentInfo={contentInfo} setPopup={setPopup} />);
    const testCloseButton = screen.getByLabelText("closeButton");
    fireEvent.click(testCloseButton);

    await waitFor(() => {expect(setPopup.mock.calls.length).toBe(1)});
  });

  test("no display episode when content is a film ", function () {
    render(<ContentMore contentInfo={contentInfo} setPopup={setPopup} />);
    expect(screen.queryByTestId(`mockEpisode`)).not.toBeInTheDocument();
  });

  test("display episode when content is a serie", function () {
    render(<ContentMore contentInfo={contentInfo} setPopup={setPopup} saisons={saisons}/>);
    expect(screen.getByTestId(`mockEpisode`)).toBeInTheDocument();
  });

});

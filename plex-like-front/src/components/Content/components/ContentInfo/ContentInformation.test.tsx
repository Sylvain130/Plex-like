import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { IContentInfo } from "../../../../type/IContentInfo";
import ContentInformation from "./ContentInformation";

jest.mock("./components/Presentation", (): unknown => {
  return (): JSX.Element => <div data-testid="mockPresentation" />;
});
jest.mock("./components/AdditionalInfo", (): unknown => {
    return (): JSX.Element => <div data-testid="mockAdditionalInfo" />;
  });

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


describe("test ContentInformation", function () {
  test("display Presentation", function () {
    render(<ContentInformation contentInfo={contentInfo}/>);
    const testPresentation = screen.getByTestId("mockPresentation");
    expect(testPresentation).toBeInTheDocument();
  });

  test("display AdditionalInfo", function () {
    render(<ContentInformation contentInfo={contentInfo}/>);
    const testAdditionalInfo = screen.getByTestId("mockAdditionalInfo");
    expect(testAdditionalInfo).toBeInTheDocument();
  });

  test("display playButton", function () {
    render(<ContentInformation contentInfo={contentInfo}/>);
    const testMoreButton = screen.getByRole("button");
    expect(testMoreButton).toBeInTheDocument();
  });

});

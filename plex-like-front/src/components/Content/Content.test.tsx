import { render } from "@testing-library/react";
import { screen} from "@testing-library/dom";
import { IContentInfo } from "../../type/IContentInfo";
import Content from "./Content";
import { useEffect } from "react";

interface IContentHover {
  contentInfo: IContentInfo;
  setPopup: (popup: boolean) => void;
}

jest.mock("./components/ContentMore/ContentMore.tsx", (): unknown => {
  return (): JSX.Element => <div data-testid="mockContentMore" />;
});

jest.mock("./components/ContentHover/ContentHover.tsx", (): unknown => {
  return (): JSX.Element => <div data-testid="mockContentHover" />;
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

const setPopup = jest.fn(popup => popup=true);
describe("test Content", function () {
  test("display Content Hover", function () {
    render(<Content contentInfo={contentInfo} setPopup={setPopup} popup={false}/>);
    const testContentHover = screen.getByTestId("mockContentHover");
    expect(testContentHover).toBeInTheDocument();
  });
  test("display Content More if click on more button", function () {
    render(<Content contentInfo={contentInfo}  setPopup={setPopup} popup={true}/>);
    const testContentMore = screen.getByTestId("mockContentMore");
    expect(testContentMore).toBeInTheDocument();
  });
});

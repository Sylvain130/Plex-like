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

const mockB = jest.fn();
jest.mock("./components/ContentHover/ContentHover.tsx", (): unknown => {
  return ({ setPopup }: IContentHover): JSX.Element => {
      useEffect(() => {
          setPopup(mockB())
      }, [])
    return <div data-testid="mockContentHover" />;
  };
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

describe("test Content", function () {
  test("display Content Hover", function () {
    mockB.mockReturnValue(false);  
    render(<Content contentInfo={contentInfo} />);
    const testContentHover = screen.getByTestId("mockContentHover");
    expect(testContentHover).toBeInTheDocument();
  });
  test("display Content More if click on more button", function () {
    mockB.mockReturnValue(true);
    render(<Content contentInfo={contentInfo} />);
    const testContentMore = screen.getByTestId("mockContentMore");
    expect(testContentMore).toBeInTheDocument();
  });
});

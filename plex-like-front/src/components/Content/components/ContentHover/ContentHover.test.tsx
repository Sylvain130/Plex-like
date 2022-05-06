import { render } from "@testing-library/react";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import ContentHover from "./ContentHover";
import { IContentInfo } from "../../../../type/IContentInfo";
import moment from "moment";

jest.mock("./../ContentInfo/ContentInformation.tsx", (): unknown => {
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


describe("test Content Hover", function () {
  test("display ContentInformation", function () {
    render(<ContentHover contentInfo={contentInfo} setPopup={setPopup} />);
    const testContentInformation = screen.getByTestId("mockContentInformation");
    expect(testContentInformation).toBeInTheDocument();
  });

  test("display title and date", function () {
    render(<ContentHover contentInfo={contentInfo} setPopup={setPopup} />);
    const testTitleDate = screen.getByText(`${contentInfo.title} - ${moment(contentInfo.date).format("YYYY")}`);
    expect(testTitleDate).toBeInTheDocument();
  });

  test("display moreButton", function () {
    render(<ContentHover contentInfo={contentInfo} setPopup={setPopup} />);
    const testMoreButton = screen.getByLabelText("moreButton");
    expect(testMoreButton).toBeInTheDocument();
  });

  test("click moreButton", async function () {
    render(<ContentHover contentInfo={contentInfo} setPopup={setPopup} />);
    const testMoreButton = screen.getByLabelText("moreButton");
    fireEvent.click(testMoreButton);

    await waitFor(() => {expect(setPopup.mock.calls.length).toBe(1)});
  });
});

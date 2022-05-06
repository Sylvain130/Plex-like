import { screen } from "@testing-library/react";
import CustomRender from "../../../../../CustomRender";
import { getI18n } from "react-i18next";
import Presentation from "./Presentation";
import moment from "moment";

const i18n = getI18n();

const title: string = "title";
const description: string = "description";
const date: string = "2000";
const genre: string = "genre";

describe("test Presentation", function () {
  test("display title", function () {
    CustomRender(
      <Presentation
        title={title}
        description={description}
        date={date}
        genre={genre}
      />
    );
    const testTitle = screen.getByText(`${title}`);
    expect(testTitle).toBeInTheDocument();
  });

  test("display description", function () {
    CustomRender(
      <Presentation
        title={title}
        description={description}
        date={date}
        genre={genre}
      />
    );
    const testDescription = screen.getByText(`${description}`);
    expect(testDescription).toBeInTheDocument();
  });

  test("display genre", function () {
    CustomRender(
      <Presentation
        title={title}
        description={description}
        date={date}
        genre={genre}
      />
    );
    const testGenre = screen.getByText(
      `${i18n.t("ContentContentInfoPresentation.Genre", {genre: genre})}`
    );
    expect(testGenre).toBeInTheDocument();
  });

  test("date", function () {
    CustomRender(
      <Presentation
        title={title}
        description={description}
        date={date}
        genre={genre}
      />
    );
    const testDate = screen.getByText(
      `${i18n.t("ContentContentInfoPresentation.Release", {date:moment(date).format("DD-MM-YYYY") })}`
    );
    expect(testDate).toBeInTheDocument();
  });
});

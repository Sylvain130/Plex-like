
import { screen } from "@testing-library/react";
import AdditionalInfo from "./AdditionalInfo";
import CustomRender from "../../../../../CustomRender";
import { getI18n } from "react-i18next";

const i18n = getI18n();

const date: string = "2000";
const realisator: string = "realisator";
const actor: string[] = ["actor1", "actor2", "actor3", "actor4"];
const publicmark: number = 0;

describe("test AdditionalInfo", function () {
  test("display public mark", function () {
    CustomRender(
      <AdditionalInfo
        date={date}
        realisator={realisator}
        actor={actor}
        publicmark={publicmark}
      />
    );
    const testpublicmark = screen.getByText(`${publicmark}/5 :`);
    expect(testpublicmark).toBeInTheDocument();
  });

  test("display realisateur", function () {
    CustomRender(
      <AdditionalInfo
        date={date}
        realisator={realisator}
        actor={actor}
        publicmark={publicmark}
      />
    );
    const testRealisator = screen.getByText(
      `${i18n.t("ContentContentInfoAdditionalInfo.Realisator", {realisator: realisator})}`
    );
    expect(testRealisator).toBeInTheDocument();
  });

  test("display actor", function () {
    CustomRender(
      <AdditionalInfo
        date={date}
        realisator={realisator}
        actor={actor}
        publicmark={publicmark}
      />
    );
    const testActor = screen.getByText(
      `${i18n.t("ContentContentInfoAdditionalInfo.Actor", {actor: `${actor[0]} / ${actor[1]} / ${actor[2]} / ${actor[3]}`})}`
    );
    expect(testActor).toBeInTheDocument();
  });
});


import Navigation from "./Navigation";
import { fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import { getI18n } from "react-i18next";
import CustomRender from "../../../../CustomRender";

const i18n = getI18n();

describe('test Navigation', function () {
    describe('test Films Button', function () {
        test('display Films Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>);
            const textFilms = screen.getByText(`${i18n.t("LayoutTopbarNavigation.Films")}`);
            expect(textFilms).toBeInTheDocument();
        })
        test('click on Films Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText(`${i18n.t("LayoutTopbarNavigation.Films")}`);
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Films');
        })
    });
    describe('test Series Button', function () {
        test('display Series Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>)
            const textSeries = screen.getByText(`${i18n.t("LayoutTopbarNavigation.Series")}`)
            expect(textSeries).toBeInTheDocument();
        })

        test('click on Series Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText(`${i18n.t("LayoutTopbarNavigation.Series")}`);
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Series');
        })
    });
    describe('test Home Button', function () {
        test('display Home Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>)
            const textHome = screen.getByText(`${i18n.t("LayoutTopbarNavigation.Home")}`)
            expect(textHome).toBeInTheDocument();
        })

        test('click on Home Button', function () {
            CustomRender(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText("Acceuil");
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Home');
        })
    })
})
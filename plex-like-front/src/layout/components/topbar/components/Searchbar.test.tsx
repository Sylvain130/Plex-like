import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import { BrowserRouter } from "react-router-dom";
import Searchbar from "./Searchbar";
import { getI18n } from "react-i18next";
import CustomRender from "../../../../CustomRender";

const i18n = getI18n();
describe('test Search Bar', function () {
    test('test display Home Button', function () {
        CustomRender(<BrowserRouter><Searchbar /></BrowserRouter>)
        const textSearch = screen.getByPlaceholderText(`${i18n.t("LayoutTopbarSearch.Search")}`)
        expect(textSearch).toBeInTheDocument();
    })
})
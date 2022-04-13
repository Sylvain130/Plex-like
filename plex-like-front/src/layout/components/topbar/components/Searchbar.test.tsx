import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import { BrowserRouter } from "react-router-dom";
import Searchbar from "./Searchbar";
describe('test Search Bar', function () {
    test('test display Home Button', function () {
        render(<BrowserRouter><Searchbar /></BrowserRouter>)
        const textSearch = screen.getByPlaceholderText("Rechercher...")
        expect(textSearch).toBeInTheDocument();
    })
})
import { render } from "@testing-library/react";
import Navigation from "./Navigation";
import { fireEvent, screen } from "@testing-library/dom"
import { BrowserRouter } from "react-router-dom";

describe('test Navigation', function () {
    describe('test Films Button', function () {
        test('test display Films Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>);
            const textFilms = screen.getByText("Films");
            expect(textFilms).toBeInTheDocument();
        })
        test('test click on Films Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText("Films");
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Films');
        })
    });
    describe('test Series Button', function () {
        test('test display Series Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>)
            const textSeries = screen.getByText("Séries")
            expect(textSeries).toBeInTheDocument();
        })

        test('test click on Series Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText("Séries");
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Series');
        })
    });
    describe('test Home Button', function () {
        test('test display Home Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>)
            const textHome = screen.getByText("Acceuil")
            expect(textHome).toBeInTheDocument();
        })

        test('test click on Home Button', function () {
            render(<BrowserRouter><Navigation /></BrowserRouter>);
            const button = screen.getByText("Acceuil");
            fireEvent.click(button)
            expect(global.window.location.pathname).toEqual('/Home');
        })
    })
})
import { fireEvent, render } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom"
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe('test LoginPage', function () {
    test('test logo must have src = "./plex-logo.png" and alt = "logo"', () => {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', './plex-logo.png');
        expect(logo).toHaveAttribute('alt', 'logo');
    });

    describe('test Form', function () {
        describe('test Input Email', function () {
            test('test display Input Email', function () {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const testInputEmail = screen.getByPlaceholderText("Email");
                expect(testInputEmail).toBeInTheDocument()
            })

            test('test valid email to email input field', async () => {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const inputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(inputEmail, { target: { value: "test@mail.com" } })

                const testSubmit = screen.getByDisplayValue("se connecter");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("test@mail.com")});
                expect(screen.queryByText("Email requis")).not.toBeInTheDocument();
                expect(screen.queryByText("Email non valide")).not.toBeInTheDocument();
            });


            test('test unvalid email to email input field', async () => {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const testInputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(testInputEmail, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("se connecter");
                userEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("test")});
                expect(screen.queryByText("Email requis")).not.toBeInTheDocument();
                expect(screen.getByText("Email non valide")).toBeInTheDocument();
            });

            test('test not email to email input field',  async () => {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const testInputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(testInputEmail, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue("se connecter");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("")});
                expect(screen.queryByText("Email non valide")).not.toBeInTheDocument();
                expect(screen.getByText("Email requis")).toBeInTheDocument();
            });
        })

        describe('test Input Password', function () {
            test('test password to password input field',  async () => {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const testInputEmail = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputEmail, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("se connecter");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("test")});
                expect(screen.queryByText("Mot de passe requis")).not.toBeInTheDocument();
            });

            test('test not password to password input field',  async () => {
                render(<BrowserRouter><LoginPage /></BrowserRouter>);
                const testInputEmail = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputEmail, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue("se connecter");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("")});
                expect(screen.getByText("Mot de passe requis")).toBeInTheDocument();
            });
        });

        test('test display Submit Button', function () {
            render(<BrowserRouter><LoginPage /></BrowserRouter>);
            const testInputPassword = screen.getByPlaceholderText("Mot de passe");
            expect(testInputPassword).toBeInTheDocument()
        })
    })

    test('test click on Register Button', function  async () {
        render(<BrowserRouter><LoginPage /></BrowserRouter>);
        const button = screen.getByText("Pas inscrit? L'inscription c'est ici");
        fireEvent.click(button);
        expect(global.window.location.pathname).toEqual('/Register');
    })

})
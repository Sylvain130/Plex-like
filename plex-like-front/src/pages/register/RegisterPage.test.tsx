import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import RegisterPage from "./RegisterPage";

describe('test RegisterPage', function () {

    describe('test Form', function () {
        describe('test Input Email', function () {
            test('test display Input Email', function () {
                render(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText("Email");
                expect(testInputEmail).toBeInTheDocument()
            })

            test('test valid email to email input field', async () => {
                render(<RegisterPage />);
                const inputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(inputEmail, { target: { value: "test@mail.com" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("test@mail.com")});
                await waitFor(() => {expect(screen.queryByText("Email requis")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.queryByText("Email non valide")).not.toBeInTheDocument()});
            });

            test('test unvalid email to email input field', async () => {
                render(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(testInputEmail, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                //await screen.findByText("​​Email non valide");

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("test")});
                await waitFor(() => {expect(screen.queryByText("Email requis")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.getByText("Email non valide")).toBeInTheDocument()});
            });

            test('test not email to email input field', async () => {
                render(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText("Email");
                fireEvent.change(testInputEmail, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                //await screen.findByText("​​Email requis");

                await waitFor(() => {expect(screen.getByPlaceholderText("Email")).toHaveValue("")});
                await waitFor(() => {expect(screen.queryByText("Email non valide")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.getByText("Email requis")).toBeInTheDocument()});
            });
        })

        describe('test Input Password', function () {
            test('test password to password input field', async () => {
                render(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("test")});
                await waitFor(() => {expect(screen.queryByText("Mot de passe requis")).not.toBeInTheDocument()});
            });

            test('test not password to password input field', async () => {
                render(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputPassword, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                //await screen.findByText("​​Mot de passe requis");

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("")});
                await waitFor(() => {expect(screen.getByText("Mot de passe requis")).toBeInTheDocument()});
            });
        });
        describe('test Input ConfirmPassword', function () {
            test('test Confirm password to confirm password input field', async () => {
                render(<RegisterPage />);
                const testInputConfirmPassword = screen.getByPlaceholderText("Confirmation mot de passe");
                fireEvent.change(testInputConfirmPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Confirmation mot de passe")).toHaveValue("test")});
                await waitFor(() => {expect(screen.queryByText("Confirmation de mot de passe requis")).not.toBeInTheDocument()});
            });

            test('test not Confirm password to confirm password input field', async () => {
                render(<RegisterPage />);
                const testInputConfirmPassword = screen.getByPlaceholderText("Confirmation mot de passe");
                fireEvent.change(testInputConfirmPassword, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                //await screen.findByText("​Confirmation de mot de passe requis");

                await waitFor(() => {expect(screen.getByPlaceholderText("Confirmation mot de passe")).toHaveValue("")});
                await waitFor(() => {expect(screen.getByText("Confirmation de mot de passe requis")).toBeInTheDocument()});
            });

            test('test Password and Confirm password different', async () => {
                render(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testInputConfirmPassword = screen.getByPlaceholderText("Confirmation mot de passe");
                fireEvent.change(testInputConfirmPassword, { target: { value: "test1" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                //await screen.findByText("Les mots de passe sont différents");

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("test")});
                await waitFor(() => {expect(screen.getByPlaceholderText("Confirmation mot de passe")).toHaveValue("test1")});
                await waitFor(() => {expect(screen.queryByText("Confirmation de mot de passe requis")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.getByText("Les mots de passe sont différents")).toBeInTheDocument()});
            });

            test('test Password and Confirm password equal', async () => {
                render(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText("Mot de passe");
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testInputConfirmPassword = screen.getByPlaceholderText("Confirmation mot de passe");
                fireEvent.change(testInputConfirmPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue("Inscription");
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText("Mot de passe")).toHaveValue("test")});
                await waitFor(() => {expect(screen.getByPlaceholderText("Confirmation mot de passe")).toHaveValue("test")});
                await waitFor(() => {expect(screen.queryByText("Les mots de passe sont différents")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.queryByText("Confirmation de mot de passe requis")).not.toBeInTheDocument()});
                await waitFor(() => {expect(screen.queryByText("Mot de passe requis")).not.toBeInTheDocument()});
            });
        });
    })
})
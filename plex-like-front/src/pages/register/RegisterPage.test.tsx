import { fireEvent, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom"
import RegisterPage from "./RegisterPage";
import { getI18n } from "react-i18next";
import CustomRender from "../../CustomRender";

const i18n = getI18n();

describe('test RegisterPage', function () {

    describe('test Form', function () {
        describe('test Input Email', function () {
            test('display Input Email', function () {
                CustomRender(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`);
                expect(testInputEmail).toBeInTheDocument()
            })

            test('valid email to email input field', async () => {
                CustomRender(<RegisterPage />);
                const inputEmail = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`);
                fireEvent.change(inputEmail, { target: { value: "test@mail.com" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`)).toHaveValue("test@mail.com")});
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredEmail")}`)).not.toBeInTheDocument();
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorInvalidEmail")}`)).not.toBeInTheDocument();
            });

            test('unvalid email to email input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`);
                fireEvent.change(testInputEmail, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`)).toHaveValue("test")});
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredEmail")}`)).not.toBeInTheDocument();
                expect(screen.getByText(`${i18n.t("RegisterPage.ErrorInvalidEmail")}`)).toBeInTheDocument();
            });

            test('not email to email input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputEmail = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`);
                fireEvent.change(testInputEmail, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Email")}`)).toHaveValue("")});
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorInvalidEmail")}`)).not.toBeInTheDocument();
                expect(screen.getByText(`${i18n.t("RegisterPage.ErrorRequiredEmail")}`)).toBeInTheDocument();
            });
        })

        describe('test Input Password', function () {
            test('password to password input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`);
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`)).toHaveValue("test")});
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredPassword")}`)).not.toBeInTheDocument();
            });

            test('not password to password input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`);
                fireEvent.change(testInputPassword, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`)).toHaveValue("")});
                expect(screen.getByText(`${i18n.t("RegisterPage.ErrorRequiredPassword")}`)).toBeInTheDocument();
            });
        });
        
        describe('test Input ConfirmPassword', function () {
            test('Confirm password to confirm password input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputConfirmPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`);
                fireEvent.change(testInputConfirmPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`)).toHaveValue("test")});
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredConfirmPassword")}`)).not.toBeInTheDocument();
            });

            test('not Confirm password to confirm password input field', async () => {
                CustomRender(<RegisterPage />);
                const testInputConfirmPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`);
                fireEvent.change(testInputConfirmPassword, { target: { value: "" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`)).toHaveValue("")});
                expect(screen.getByText(`${i18n.t("RegisterPage.ErrorRequiredConfirmPassword")}`)).toBeInTheDocument();
            });

            test('Password and Confirm password different', async () => {
                CustomRender(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`);
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testInputConfirmPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`);
                fireEvent.change(testInputConfirmPassword, { target: { value: "test1" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`)).toHaveValue("test")});
                expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`)).toHaveValue("test1");
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredConfirmPassword")}`)).not.toBeInTheDocument();
                expect(screen.getByText(`${i18n.t("RegisterPage.ErrorDifferentPassword")}`)).toBeInTheDocument();
            });

            test('Password and Confirm password equal', async () => {
                CustomRender(<RegisterPage />);
                const testInputPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`);
                fireEvent.change(testInputPassword, { target: { value: "test" } })

                const testInputConfirmPassword = screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`);
                fireEvent.change(testInputConfirmPassword, { target: { value: "test" } })

                const testSubmit = screen.getByDisplayValue(`${i18n.t("RegisterPage.Registration")}`);
                fireEvent.click(testSubmit);

                await waitFor(() => {expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.Password")}`)).toHaveValue("test")});
                expect(screen.getByPlaceholderText(`${i18n.t("RegisterPage.ConfirmPassword")}`)).toHaveValue("test");
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorDifferentPassword")}`)).not.toBeInTheDocument();
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredConfirmPassword")}`)).not.toBeInTheDocument();
                expect(screen.queryByText(`${i18n.t("RegisterPage.ErrorRequiredPassword")}`)).not.toBeInTheDocument();
            });
        });
    })
})
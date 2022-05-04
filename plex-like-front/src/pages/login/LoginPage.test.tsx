import { fireEvent } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
import LoginPage from "./LoginPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { getI18n } from "react-i18next";
import CustomRender from "../../CustomRender";

const i18n = getI18n();
describe("test LoginPage", function () {
  test('logo must have src = "./plex-logo.png" and alt = "logo"', () => {
    CustomRender(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "./plex-logo.png");
    expect(logo).toHaveAttribute("alt", "logo");
  });

  describe("test Form", function () {
    describe("test Input Email", function () {
      test("display Input Email", function () {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const testInputEmail = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Email")}`
        );
        expect(testInputEmail).toBeInTheDocument();
      });

      test("valid email to email input field", async () => {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const inputEmail = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Email")}`
        );
        fireEvent.change(inputEmail, { target: { value: "test@mail.com" } });

        const testSubmit = screen.getByDisplayValue(
          `${i18n.t("LoginPage.Login")}`
        );
        fireEvent.click(testSubmit);

        await waitFor(() => {
          expect(
            screen.getByPlaceholderText(`${i18n.t("LoginPage.Email")}`)
          ).toHaveValue("test@mail.com");
        });
        expect(
          screen.queryByText(`${i18n.t("LoginPage.ErrorRequiredEmail")}`)
        ).not.toBeInTheDocument();
        expect(
          screen.queryByText(`${i18n.t("LoginPage.ErrorInvalidEmail")}`)
        ).not.toBeInTheDocument();
      });

      test("unvalid email to email input field", async () => {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const testInputEmail = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Email")}`
        );
        fireEvent.change(testInputEmail, { target: { value: "test" } });

        const testSubmit = screen.getByDisplayValue(
          `${i18n.t("LoginPage.Login")}`
        );
        userEvent.click(testSubmit);

        await waitFor(() => {
          expect(
            screen.getByPlaceholderText(`${i18n.t("LoginPage.Email")}`)
          ).toHaveValue("test");
        });
        expect(
          screen.queryByText(`${i18n.t("LoginPage.ErrorRequiredEmail")}`)
        ).not.toBeInTheDocument();
        expect(
          screen.getByText(`${i18n.t("LoginPage.ErrorInvalidEmail")}`)
        ).toBeInTheDocument();
      });

      test("not email to email input field", async () => {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const testInputEmail = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Email")}`
        );
        fireEvent.change(testInputEmail, { target: { value: "" } });

        const testSubmit = screen.getByDisplayValue(
          `${i18n.t("LoginPage.Login")}`
        );
        fireEvent.click(testSubmit);

        await waitFor(() => {
          expect(
            screen.getByPlaceholderText(`${i18n.t("LoginPage.Email")}`)
          ).toHaveValue("");
        });
        expect(
          screen.queryByText(`${i18n.t("LoginPage.ErrorInvalidEmail")}`)
        ).not.toBeInTheDocument();
        expect(
          screen.getByText(`${i18n.t("LoginPage.ErrorRequiredEmail")}`)
        ).toBeInTheDocument();
      });
    });

    describe("test Input Password", function () {
      test("password to password input field", async () => {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const testInputPassword = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Password")}`
        );
        fireEvent.change(testInputPassword, { target: { value: "test" } });

        const testSubmit = screen.getByDisplayValue(
          `${i18n.t("LoginPage.Login")}`
        );
        fireEvent.click(testSubmit);

        await waitFor(() => {
          expect(
            screen.getByPlaceholderText(`${i18n.t("LoginPage.Password")}`)
          ).toHaveValue("test");
        });
        expect(
          screen.queryByText(`${i18n.t("LoginPage.ErrorRequiredPassword")}`)
        ).not.toBeInTheDocument();
      });

      test("not password to password input field", async () => {
        CustomRender(
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        );
        const testInputPassword = screen.getByPlaceholderText(
          `${i18n.t("LoginPage.Password")}`
        );
        fireEvent.change(testInputPassword, { target: { value: "" } });

        const testSubmit = screen.getByDisplayValue(
          `${i18n.t("LoginPage.Login")}`
        );
        fireEvent.click(testSubmit);

        await waitFor(() => {
          expect(
            screen.getByPlaceholderText(`${i18n.t("LoginPage.Password")}`)
          ).toHaveValue("");
        });
        expect(
          screen.getByText(`${i18n.t("LoginPage.ErrorRequiredPassword")}`)
        ).toBeInTheDocument();
      });
    });

    test("display Submit Button", function () {
      CustomRender(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );
      const testSubmitButton = screen.getByPlaceholderText(
        `${i18n.t("LoginPage.Password")}`
      );
      expect(testSubmitButton).toBeInTheDocument();
    });
  });

  test("click on Register Button", function async() {
    CustomRender(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    const button = screen.getByText(`${i18n.t("LoginPage.InvitRegister")}`);
    fireEvent.click(button);
    expect(global.window.location.pathname).toEqual("/Register");
  });
});

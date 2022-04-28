import { Box, TextField, Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SxProps } from "@mui/system";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FieldErrors, useForm } from "react-hook-form";
import base64 from "react-native-base64";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const styleForm: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const styleInput: SxProps = {
  margin: "0.3rem",
};

const styleLoginPage: SxProps = {
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& > *": {
    margin: "1rem",
    width: "30%",
  },
};


const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => onSubmitClick(data));
  const onSubmitClick = (data: FormValues) => {
    console.log("You pressed login");
    const headers = new Headers({
      Authorization: "Basic " + base64.encode(data.email + ":" + data.password),
    });
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: headers,
    })
      .then((r) => r.json())
      .then((token) => {
        console.log(token);
        navigate("/films");
      });
  };

  return (
    <Box sx={styleLoginPage}>
      <img src="./plex-logo.png" alt="logo" />
      <Box
        component="form"
        sx={styleForm}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          sx={styleInput}
          {...register("email", {
            required: `${t("LoginPage.ErrorRequiredEmail")}`,
            pattern: {
              value: /^\S+@\S+$/i,
              message: `${t("LoginPage.ErrorInvalidEmail")}`,
            },
          })}
          placeholder={t("LoginPage.Email")}
          helperText={errors?.email?.message}
          error={errors.email !== undefined}
        />

        <TextField
          type="password"
          sx={styleInput}
          {...register("password", {
            required: `${t("LoginPage.ErrorRequiredPassword")}`,
          })}
          placeholder={t("LoginPage.Password")}
          helperText={errors?.password?.message}
          error={errors.password !== undefined}
        />

        <Input sx={styleInput} type="submit" value={t("LoginPage.Login")} />
      </Box>

      <Button variant="text" component={Link} to="/Register">
        {t("LoginPage.InvitRegister")}
      </Button>
    </Box>
  );
};

export default LoginPage;


import { Box, TextField, Input, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import base64 from "react-native-base64";
import { useNavigate } from "react-router-dom";
import theme from "../../assets/Themes/Theme";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
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

const styleTypo: SxProps = {
  color: theme.palette.error.main,
  fontSize: "0.75rem",
};

const styleRegisterPage: SxProps = {
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& > *": {
    margin: "1rem",
    width: "40%",
  },
};

const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [errorUser, setErrorUser] = useState(false);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => onSubmitClick(data));

  const onSubmitClick = (data: FormValues) => {
    const headers1 = new Headers({
      "Content-Type": "application/json",
    });
    const body = JSON.stringify({
      email: `${data.email}`,
      password: `${data.password}`,
    });

    fetch("http://localhost:5000/register", {
      method: "post",
      headers: headers1,
      body: body,
    })
      .then(async (response) => {
        const r = await response;
        const message = await r.json();
        if (r.status !== 200) {
          if (message.message === "user already exist") {
            setErrorUser(true);
          }
        } else {
          if (message.message === "registeration successfully") {
            const headers2 = new Headers({
              Authorization:
                "Basic " + base64.encode(data.email + ":" + data.password),
            });
            fetch("http://localhost:5000/login", {
              method: "post",
              headers: headers2,
            }).then(() => {
              navigate("/films");
            });
          }
        }
      })
      .catch();
  };

  return (
    <Box sx={styleRegisterPage}>
      <Box
        component="form"
        sx={styleForm}
        autoComplete="on"
        onSubmit={onSubmit}
      >
        <TextField
          sx={styleInput}
          {...register("email", {
            required: `${t("RegisterPage.ErrorRequiredEmail")}`,
            pattern: {
              value: /^\S+@\S+$/i,
              message: `${t("RegisterPage.ErrorInvalidEmail")}`,
            },
          })}
          placeholder={t("RegisterPage.Email")}
          helperText={errors?.email?.message}
          error={errors.email !== undefined}
          onChange={() => setErrorUser(false)}
        />

        {errorUser ? (
          <Typography sx={styleTypo}>
            {t("RegisterPage.ErrorAccountAlreadyExists")}
          </Typography>
        ) : (
          <></>
        )}

        <TextField
          sx={styleInput}
          {...register("password", {
            required: `${t("RegisterPage.ErrorRequiredPassword")}`,
          })}
          placeholder={t("RegisterPage.Password")}
          helperText={errors?.password?.message}
          error={errors.password !== undefined}
        />

        <TextField
          sx={styleInput}
          {...register("confirmPassword", {
            validate: {
              requis: (value) =>
                value !== "" ||
                `${t("RegisterPage.ErrorRequiredConfirmPassword")}`,
              different: (value) =>
                value === getValues("password") ||
                `${t("RegisterPage.ErrorDifferentPassword")}`,
            },
          })}
          type="password"
          placeholder={t("RegisterPage.ConfirmPassword")}
          helperText={errors?.confirmPassword?.message}
          error={errors.confirmPassword !== undefined}
        />

        <Input
          sx={styleInput}
          type="submit"
          value={t("RegisterPage.Registration")}
        />
      </Box>
    </Box>
  );
};
export default RegisterPage;

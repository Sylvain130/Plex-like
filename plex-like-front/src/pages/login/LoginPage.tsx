
import { useTranslation } from "react-i18next";
import { Box, TextField, Input, Link, Typography} from "@mui/material";
import { SxProps } from "@mui/system";
import { useState } from "react";
import base64 from "react-native-base64";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import theme from "../../assets/Themes/Theme";

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

const styleTypo: SxProps = {
  color: theme.palette.error.main,
  fontSize: "0.75rem",
};

const styleLink: SxProps = {
  color: theme.palette.text.primary,
  fontSize: "1rem",
  textAlign: "center"
  
};

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();
  const [errorUser, setErrorUser] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => onSubmitClick(data));
  const onSubmitClick = (data: FormValues) => {
    const headers = new Headers({
      Authorization: "Basic " + base64.encode(data.email + ":" + data.password),
    });
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: headers,
    }).then(async (response) => {
      const r = await response;
      const message = await r.json();
      if (r.status !== 200) {
        if (message.message === "user does not exist") {
          setErrorUser(true);
        }
        if (message.message === "invalid password") {
          setErrorPassword(true);
        }
      } else {
        navigate("/films");
      }
    });
  };

  return (
    <Box sx={styleLoginPage}>
      <img src="./plex-logo.png" alt="logo" />
      <Box
        component="form"
        sx={styleForm}
        autoComplete="on"
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
          onChange={() => setErrorUser(false)}
        />
        {errorUser ? (
          <Typography sx={styleTypo}>
            {t("LoginPage.ErrorAccountDoesNotExists")}
          </Typography>
        ) : (
          <></>
        )}

        <TextField
          type="password"
          sx={styleInput}
          {...register("password", {
            required: `${t("LoginPage.ErrorRequiredPassword")}`,
          })}
          placeholder={t("LoginPage.Password")}
          helperText={errors?.password?.message}
          error={errors.password !== undefined}
          onChange={() => setErrorPassword(false)}
        />
        {errorPassword ? (
          <Typography sx={styleTypo}> {t("LoginPage.ErrorInvalidPassword")}</Typography>
        ) : (
          <></>
        )}

        <Input sx={styleInput} type="submit" value={t("LoginPage.Login")} />
      </Box>

      <Link href="/Register" sx={styleLink}>
        {t("LoginPage.InvitRegister")}
      </Link>
    </Box>
  );
};

export default LoginPage;


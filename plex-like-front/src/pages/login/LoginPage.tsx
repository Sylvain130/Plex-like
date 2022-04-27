import { Box, TextField, Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { SxProps } from "@mui/system";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FormValues = {
  email: string;
  password: string;
};

const onSubmitClick = (data: Object)=>{
  console.log("You pressed login")
  
  console.log(data)
  fetch('/../../../plex-like-back/app/login', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(r => r.json())
    .then(token => {
      if (token.access_token){
        console.log(token)          
      }
      else {
        console.log("Please type in correct username/password")
      }
    })
}

const LoginPage = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => onSubmitClick(data));

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

  const styleForm: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const styleInput: SxProps = {
    margin: "0.3rem",
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


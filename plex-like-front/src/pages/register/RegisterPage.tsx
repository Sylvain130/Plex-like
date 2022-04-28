import { Box, TextField, Input } from "@mui/material";
import { SxProps } from "@mui/system";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import base64 from "react-native-base64";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => onSubmitClick(data));
  const onSubmitClick = (data: FormValues) => {
    console.log("You pressed register");

    const headers1 = new Headers({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify({ "email":`${data.email}`,"password":`${data.password}`});

    fetch("http://localhost:5000/register", {
      method: "post",
      headers: headers1,
      body: body,
    })
      .then((r) => r.json())
    
    console.log("login");

    const headers2 = new Headers({
      Authorization: "Basic " + base64.encode(data.email + ":" + data.password),
    });
    fetch("http://localhost:5000/login", {
      method: "post",
      headers: headers2,
    })
      .then((r) => r.json())
      .then((token) => {
        console.log(token);
        navigate("/films");
      });
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
    <Box sx={styleRegisterPage}>
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
            required: `${t("RegisterPage.ErrorRequiredEmail")}`,
            pattern: {
              value: /^\S+@\S+$/i,
              message: `${t("RegisterPage.ErrorInvalidEmail")}`,
            },
          })}
          placeholder={t("RegisterPage.Email")}
          helperText={errors?.email?.message}
          error={errors.email !== undefined}
        />

        <TextField
          type="password"
          sx={styleInput}
          {...register("password", {
            required: `${t("RegisterPage.ErrorRequiredPassword")}`,
          })}
          placeholder={t("RegisterPage.Password")}
          helperText={errors?.password?.message}
          error={errors.password !== undefined}
        />

        <TextField
          type="password"
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

import { Box, TextField, Input, Link, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useState } from "react";
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

const styleTypo: SxProps = {
  color: "#f44336",
  fontSize: "0.75rem",
};

const errorMessageEmail = (errors: FieldErrors) => {
  if (errors?.Email?.type === "required") {
    return "Email requis";
  } else if (errors?.Email?.type === "pattern") {
    return "Email non valide";
  }
};

const LoginPage = (): JSX.Element => {
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
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          helperText={errorMessageEmail(errors)}
          onChange={() => setErrorUser(false)}
        />
        {errorUser ? (
          <Typography sx={styleTypo}>
            {" "}
            Cet email n'est pas associé à un compte
          </Typography>
        ) : (
          <></>
        )}

        <TextField
          sx={styleInput}
          {...register("password", { required: true })}
          type="password"
          placeholder="Mot de passe"
          helperText={
            errors?.password?.type === "required" && "Mot de passe requis"
          }
          onChange={() => setErrorPassword(false)}
        />
        {errorPassword ? (
          <Typography sx={styleTypo}> Le mot de passe est invalide</Typography>
        ) : (
          <></>
        )}

        <Input sx={styleInput} type="submit" value="se connecter" />
      </Box>
      <Link href="/Register" align="center">
        Pas inscrit? L'inscription c'est ici
      </Link>
    </Box>
  );
};

export default LoginPage;

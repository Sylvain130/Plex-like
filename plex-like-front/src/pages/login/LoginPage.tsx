import { Box, TextField, Input, Link } from "@mui/material";
import { SxProps } from "@mui/system";
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

const errorMessageEmail = (errors: FieldErrors) => {
  if (errors?.Email?.type === "required") {
    return "Email requis";
  } else if (errors?.Email?.type === "pattern") {
    return "Email non valide";
  }
};

const LoginPage = (): JSX.Element => {
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
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          helperText={errorMessageEmail(errors)}
        />

        <TextField
          sx={styleInput}
          {...register("password", { required: true })}
          placeholder="Mot de passe"
          helperText={
            errors?.password?.type === "required" && "Mot de passe requis"
          }
        />

        <Input sx={styleInput} type="submit" value="se connecter" />
      </Box>
      <Link href="/Register" align="center">
        {" "}
        Pas inscrit? L'inscription c'est ici{" "}
      </Link>
    </Box>
  );
};

export default LoginPage;

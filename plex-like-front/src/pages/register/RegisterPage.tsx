import { Box, TextField, Input, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import base64 from "react-native-base64";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const styleHomePage: SxProps = {
  width: "100%",
  height: "100vh",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& > *": {
    margin: "15px",
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

const styleTypo: SxProps = {
  color: "#f44336",
  fontSize: "0.75rem",
};

const RegisterPage = (): JSX.Element => {
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
    <Box sx={styleHomePage}>
      <Box
        component="form"
        sx={styleForm}
        autoComplete="on"
        onSubmit={onSubmit}
      >
        <TextField
          sx={styleInput}
          {...register("email", {
            required: "Email requis",
            pattern: { value: /^\S+@\S+$/i, message: "Email non valide" },
          })}
          placeholder="Email"
          helperText={errors?.email?.message}
          error={errors.email !== undefined}
          onChange={() => setErrorUser(false)}
        />

        {errorUser ? (
          <Typography sx={styleTypo}>
            {" "}
            Cet email est déjà associé à un compte
          </Typography>
        ) : (
          <></>
        )}

        <TextField
          sx={styleInput}
          {...register("password", { required: "Mot de passe requis" })}
          type="password"
          placeholder="Mot de passe"
          helperText={errors?.password?.message}
          error={errors.password !== undefined}
        />

        <TextField
          sx={styleInput}
          {...register("confirmPassword", {
            validate: {
              requis: (value) =>
                value !== "" || "Confirmation de mot de passe requis",
              different: (value) =>
                value === getValues("password") ||
                "Les mots de passe sont différents",
            },
          })}
          type="password"
          placeholder="Confirmation mot de passe"
          helperText={errors?.confirmPassword?.message}
          error={errors.confirmPassword !== undefined}
        />

        <Input sx={styleInput} type="submit" value="Inscription" />
      </Box>
    </Box>
  );
};
export default RegisterPage;

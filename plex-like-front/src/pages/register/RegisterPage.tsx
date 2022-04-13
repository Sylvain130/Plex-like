import { Box, TextField, Input } from "@mui/material";
import { SxProps } from "@mui/system";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

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
  const onSubmit = handleSubmit((data) => console.log(data));

  const styleRegisterPage: SxProps = {
    width: "100%",
    height: "100vh",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    "& > *": {
      margin: "15px",
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

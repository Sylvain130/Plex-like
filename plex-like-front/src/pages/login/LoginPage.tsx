
import { Box, TextField, Input, Link } from "@mui/material";
import { SxProps } from "@mui/system";
import { FieldErrors, useForm } from 'react-hook-form';

type FormValues = {
    Email: string;
    Password: string;
};

const errorMessageEmail = (errors: FieldErrors) => {
    if (errors?.Email?.type === "required") {
        return ("Email requis");
    }
    else if (errors?.Email?.type === "pattern") {
        return ("Email non valide")
    }
}

const LoginPage = (): JSX.Element => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    const styleLoginPage: SxProps = {
        width: '100%',
        height: '100vh',
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        '& > *': {
            margin: '15px',
            width: '30%',
        }
    }

    const styleForm: SxProps = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const styleInput: SxProps = {
        margin: '5px',
    }

    return (
        <Box sx={styleLoginPage}>
            <img src={'./plex-logo.png'} alt="logo" />
            <Box
                component="form"
                sx={styleForm}
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >

                <TextField sx={styleInput} {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" helperText={errorMessageEmail(errors)} />

                <TextField sx={styleInput} {...register("Password", { required: true })} placeholder="Mot de passe" helperText={(errors?.Password?.type === "required") && "Mot de passe requis"} />

                <Input sx={styleInput} type="submit" value="se connecter" />

            </Box>
            <Link href="/Register" align="center" > Pas inscrit? L'inscription c'est ici </Link>
        </Box>
    )
}



export default LoginPage;

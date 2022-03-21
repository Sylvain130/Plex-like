
import { Box, TextField, Input} from "@mui/material";
import { SxProps } from "@mui/system";
import { useForm } from 'react-hook-form';

type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

const RegisterPage = (): JSX.Element => {

    const { register, getValues, handleSubmit,  formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data) => console.log(data));

    const styleHomePage: SxProps = {
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
        <Box sx={styleHomePage}>

        <Box
            component="form"
            sx={styleForm}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >

            <TextField
                sx={styleInput}
                {...register("email", { required: "Email requis", pattern: {value:/^\S+@\S+$/i, message: "Email non valide"}})}
                placeholder="Email"
                helperText={errors?.email?.message} 
                error={errors.email !== undefined}
                />

            <TextField
                type="password"
                sx={styleInput}
                {...register("password", { required: "Mot de passe requis"})}
                placeholder="Mot de passe"
                helperText={errors?.password?.message} 
                error={errors.password !== undefined}
                />

            <TextField
                type="password" sx={styleInput}
                {...register("confirmPassword", {validate: {
                    requis: value => value !== '' || 'Confirmation de mot de passe requis',
                    different: value => value === getValues("password") || 'Les mots de passe sont différents'}})}
                placeholder="Confirmation mot de passe"
                helperText={errors?.confirmPassword?.message} 
                error={errors.confirmPassword !== undefined}
                />

            <Input sx={styleInput} type="submit" value="Inscription" />

        </Box>

    </Box>
    )
}
export default RegisterPage;
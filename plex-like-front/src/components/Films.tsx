import { Box, SxProps } from '@mui/material';


import poster from '.\affiche-avengers.png';
const title: string= 'Avengers';
const description: string= "Quand un ennemi inattendu fait surface pour menacer la sécurité et l'équilibre mondial, Nick Fury, directeur de l'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente.";
const date: Date =  new Date(2012,0o4,25);
const realisator: string= "Joss Whedon";
const publicmark: string= "4.1";

const styleFilms : SxProps ={
    width: '1200px',
    height: '1600px',
    background: 'theme.palette.background.paper',
}

const Films = (): JSX.Element => {
    
    return(
        <Box className='test' sx={styleFilms}>
            test
        </Box>
    )
}
export default Films;
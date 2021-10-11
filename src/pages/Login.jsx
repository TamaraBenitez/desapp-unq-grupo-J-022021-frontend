import Container from '@mui/material/Container';
import "../styles/Register.css"
import Grid from '@mui/material/Grid';
import Logo from "../images/logo.png";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CustomTextField from '../components/CustomTextField';





const Login = () => {


    return (

        <Container disableGutters maxWidth={false} className="conteiner-color">
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >


                <img src={Logo} className="logoRegister" alt="logo" />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',

                        '& > :not(style)': {
                            m: 1,
                            width: 400,
                            height: 500,
                            marginLeft: 15,

                        },
                    }}
                >
                    <Paper elevation={3} style={{ background: 'linear-gradient(to bottom, #071520, #194D78)', boxShadow: ' 4px 4px 4px 4px rgba(0, 0, 0, 0.4)' }} >

                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h1 className="titleSign">
                                Sign in
                            </h1>

                            
                            <CustomTextField
                                type="text"
                                label="username"
                                defaultValue=""
                                name="user"

                                inputProps={{
                                    autocomplete: "new-password",
                                    form: {
                                        autocomplete: "off",
                                    },
                                }}
                            />

                            <CustomTextField
                                type="password"
                                label="password"
                                defaultValue=""
                                name="user"

                                inputProps={{
                                    autocomplete: "new-password",
                                    form: {
                                        autocomplete: "off",
                                    },
                                }}
                            /> 

                        </Grid>
                    </Paper>
                </Box>

            </Grid>

        </Container>
    )

}
export default Login;
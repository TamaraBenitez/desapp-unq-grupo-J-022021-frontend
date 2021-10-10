import Container from '@mui/material/Container';
import "./styles/Register.css"
import Grid from '@mui/material/Grid';
import Logo from "./images/logo.png";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CustomTextField from './components/CustomTextField';





const Register = () => {


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
                            width: 1000,
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
                              Sign up
                            </h1>

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <CustomTextField
                                    type="text"
                                    label="Name"
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
                                    type="text"
                                    label="Last name"
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
                                    label="Password"
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
                                    type="text"
                                    label="Email"
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
                                    type="text"
                                    label="Address"
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
                                    type="text"
                                    label="Cvu"
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
                                    type="text"
                                    label="Address Wallet"
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
                        </Grid>
                    </Paper>
                </Box>

            </Grid>

        </Container>
    )

}
export default Register;
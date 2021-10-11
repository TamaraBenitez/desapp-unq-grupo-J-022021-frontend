import Container from '@mui/material/Container';
import "./styles/Register.css"
import Grid from '@mui/material/Grid';
import Logo from "./images/logo.png";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CustomTextField from './components/CustomTextField';
import Link from '@mui/material/Link';
import CardWrap from './components/CardWrap';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    titleSignStyle: {

        letterSpacing:"0.18px",
        color:"white",
        paddingTop:"20px",
        paddingBottom:"20px",
        fontFamily:'Crimson Text',
        fontSize:"30px"
    }




}))

const Register = () => {
    const classes = useStyles();
    const history= useHistory();

    const handleLink = () => {

        history.push("/login")
    }

    return (

        <Container disableGutters maxWidth={false} className="conteiner-color">
            <CardWrap
				style={{
					marginLeft: "140px",
					minHeight: "300px",
					marginRight: "140px",
					backgroundColor: "transparent",
				}}
			>
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
                            width: 'auto',
                            height: 'auto',
                           

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
                            <h1 className="titleSign" className={classes.titleSignStyle}>
                                Sign in
                            </h1>

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <CustomTextField
                                     required
                                     helperText="Caracteres:min 10,max 30"
                                    type="text"
                                    label="Name"
                                    defaultValue=""
                                    name="user"

                                    inputProps={{
                                        autocomplete: "new-password",
                                        form: {
                                            autocomplete: "off",
                                        },
                                        minLength:10,maxLength: 30
                                    }}
                                />

                                <CustomTextField
                                 required
                                    type="text"
                                    label="Last name"
                                    defaultValue=""
                                    name="user"

                                    inputProps={{
                                        autocomplete: "new-password",
                                        form: {
                                            autocomplete: "off",
                                        },
                                        minLength:10,maxLength: 30
                                    }}
                                />


                                <CustomTextField
                                 required
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
                                 required
                                    type="email"
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
                                 required
                                    type="text"
                                    label="Address"
                                    defaultValue=""
                                    name="user"

                                    inputProps={{
                                        autocomplete: "new-password",
                                        form: {
                                            autocomplete: "off",
                                        }, minLength:0,maxLength: 30
                                    }}
                                />
                                <CustomTextField
                                 required
                                    type="text"
                                    label="CVU"
                                    defaultValue=""
                                    name="user"

                                    inputProps={{
                                        autocomplete: "new-password",
                                        form: {
                                            autocomplete: "off",
                                        },  minLength:22,maxLength: 22
                                    }}
                                />
                                <CustomTextField
                                 required
                                    type="text"
                                    label="Address Wallet"
                                    defaultValue=""
                                    name="user"

                                    inputProps={{
                                        autocomplete: "new-password",
                                        form: {
                                            autocomplete: "off",
                                        }, minLength:8,maxLength:8
                                    }}
                                />

                               
                            </Grid>
                            <Button variant="outlined" style={{ background: 'linear-gradient(to bottom, #071520, #194D78)', boxShadow: ' 4px 4px 4px 4px rgba(0, 0, 0, 0.4)' ,color:"white",marginTop:"20px",marginBottom:"20px"}} >Sign in</Button>
                            <Link style={{color:"white"}} onClick={handleLink}>Do you already have an account? Log in</Link>
                        </Grid>
                    </Paper>
                </Box>

            </Grid>

            </CardWrap>
        </Container>
    )

}
export default Register;
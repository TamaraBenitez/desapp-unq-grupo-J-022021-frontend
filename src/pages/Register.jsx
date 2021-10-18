import Container from '@mui/material/Container';
import "../styles/Register.css"
import Grid from '@mui/material/Grid';
import Logo from "../images/logo.png";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CustomTextField from '../components/CustomTextField';
import CardWrap from '../components/CardWrap';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { Link,useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { API_Register } from '../services/APIRegister';
import { useTranslation } from "react-i18next";
import { InputAdornment, IconButton} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const useStyles = makeStyles((theme) => ({

    titleSignStyle: {

        letterSpacing: "0.18px",
        color: "white",
        paddingTop: "20px",
        paddingBottom: "20px",
        fontFamily: 'Crimson Text',
        fontSize: "30px"
    }




}))

const Register = () => {
    const classes = useStyles();
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
        cvu: "",
        addrWallet: ""
    });
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const [isShowPassword, setIsShowPassword] = useState(false);


    const changeVisualization = () => {
		setIsShowPassword(!isShowPassword);
	};

    const handleSubmit = (event) => {
        localStorage.clear()
        event.preventDefault();
        API_Register.postRegister(data)
        .then((response)=> {
            if(response !== undefined && response.data !== undefined){
            localStorage.setItem("token",response.data.accessToken)
            history.push("/login");
            }
        })
        .catch(error=> {console.log(error.response.data.error_msg)})
    }


    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
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

                            <form onSubmit={handleSubmit}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <h1 className={classes.titleSignStyle}>
                                    {t("signIn")} 
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
                                            label={t("name")}
                                            defaultValue=""
                                            name="name"
                                            onChange={handleInputChange}
                                            value={data.name}


                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                },
                                                minLength: 10, maxLength: 30
                                            }}
                                        />

                                        <CustomTextField
                                            required
                                            type="text"
                                            label={t("lastName")}
                                            defaultValue=""
                                            name="lastName"
                                            helperText="Caracteres:min 10,max 30"
                                            onChange={handleInputChange}
                                            value={data.lastName}

                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                },
                                                minLength: 10, maxLength: 30
                                            }}
                                        />


                                        <CustomTextField
                                            required
                                            type="password"
                                            label={t("passwordLabel")}
                                            defaultValue=""
                                            name="password"
                                            onChange={handleInputChange}
                                            value={data.password}
                                            type={isShowPassword ? "text" : "password"}
									data={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													style={{ padding: "0px" }}
													onClick={
														changeVisualization
													}
												>
													{isShowPassword ? (
														<VisibilityOffIcon
															style={{
																color: "white",
															}}
														/>
													) : (
														<VisibilityIcon
															style={{
																color: "white",
															}}
														/>
													)}
												</IconButton>
											</InputAdornment>
										),
									}}

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
                                            label={t("email")}
                                            defaultValue=""
                                            name="email"
                                            onChange={handleInputChange}
                                            value={data.email}

                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                },
                                            }}
                                        />
                                        <CustomTextField
                                           
                                            type="text"
                                            label={t("Address")}
                                            defaultValue=""
                                            name="address"
                                            helperText="Caracteres:max 30"
                                            onChange={handleInputChange}
                                            value={data.address}

                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                }, minLength: 0, maxLength: 30
                                            }}
                                        />
                                        <CustomTextField
                                            required
                                            type="text"
                                            label={t("cvu")}
                                            defaultValue=""
                                            name="cvu"
                                            helperText="22 digitos"
                                            onChange={handleInputChange}
                                            value={data.cvu}

                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                }, minLength: 22, maxLength: 22
                                            }}
                                        />
                                        <CustomTextField
                                            required
                                            type="text"
                                            label={t("addressWallet")}
                                            defaultValue=""
                                            name="addrWallet"
                                            helperText="8 digitos"
                                            onChange={handleInputChange}
                                            value={data.addrWallet}

                                            inputProps={{
                                                autocomplete: "new-password",
                                                form: {
                                                    autocomplete: "off",
                                                }, minLength: 8, maxLength: 8
                                            }}
                                        />


                                    </Grid>

                                    <Button type="submit" variant="outlined" style={{ background: 'linear-gradient(to bottom, #071520, #194D78)', boxShadow: ' 4px 4px 4px 4px rgba(0, 0, 0, 0.4)', color: "white", marginTop: "20px", marginBottom: "20px" }} >Sign in</Button>
                                    <Link to="/login" style={{ color: "white" }} >{t("existAccount")}</Link>
                                </Grid>
                            </form>
                        </Paper>
                    </Box>

                </Grid>

            </CardWrap>
        </Container>
    )

}
export default Register;
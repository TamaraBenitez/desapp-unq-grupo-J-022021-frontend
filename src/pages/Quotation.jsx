import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import React from "react";
import { useEffect } from "react";
import { API_Quotations } from '../services/APIListQuotation';
import "../styles/welcome.css";
import { useTranslation } from "react-i18next";
import CardQuotations from '../components/CardQuotations';
import Grid from '@mui/material/Grid';
import CardWrap from '../components/CardWrap';
import Scroll from '../components/Scroll'

const dayjs = require('dayjs');

const Quotation = () => {

    const [listQuotation, setListQuotation] = React.useState([]);
    const { t, i18n } = useTranslation();


    useEffect(() => {

        getQuotations();
        // eslint-disable-next-line

    }, [])

    const getQuotations = () => {

        API_Quotations.getQuotations()
            .then((response) => {

                setListQuotation(response.data)
            });
    }

    return (


        <Container disableGutters maxWidth={false} className="conteiner-color">





            <CardWrap style={{
                marginLeft: "140px",
                minHeight: "300px",
                marginRight: "140px",
                backgroundColor: "transparent",
            }}>

                <div className="container-welcome" >
                    <span className="welcome"> {t("welcomeUser")} </span>

                </div>

                <div style={{marginTop:"150px"}}>
                <Scroll height="360px">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                        {
                            listQuotation.map(list => (<Grid item xs={6}>
                                <CardQuotations symbol={list.symbol} hour={dayjs(list.hourCotization).format('HH:mm')} price={list.priceArs} />

                            </Grid>

                            ))
                        }

                    </Grid>
                </Scroll>

                </div>


            </CardWrap>


        </Container>


    )

}

export default Quotation;
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


                <div className="container-welcome" >
                    <span className="welcome"> {t("welcomeUser")} </span>

                </div>

                <div style={{marginTop:"150px"}}>
                        <CardWrap>

                        {
                            listQuotation.map(list => (
                                <CardQuotations symbol={list.symbol} hour={dayjs(list.hourCotization).format('HH:mm')} price={list.priceArs} />


                            ))
                        }
                    </CardWrap>

                </div>




        </Container>


    )

}

export default Quotation;
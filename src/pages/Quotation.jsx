import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import React from "react";
import { useEffect } from "react";
import { API_Quotations } from '../services/APIListQuotation';


const Quotation = () => {

    [listQuotation,setListQuotation] = React.useState([]);


    useEffect(()=>  {

        getQuotations();
         // eslint-disable-next-line
  
      },[])

    const getQuotations = () => {

        API_Quotations.getQuotations()
        .then((response) => {

            setListQuotation(response.data)
        });
    }

return (

    <Container disableGutters maxWidth={false} className="conteiner-color">

    


    </Container>

)

}

export default Quotation;
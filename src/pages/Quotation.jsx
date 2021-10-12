import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import React from "react";
import { useEffect } from "react";
import { API_Quotations } from '../services/APIListQuotation';


const Quotation = () => {

 const [listQuotation,setListQuotation] = React.useState([]);


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
    {
        listQuotation.map(list=>(<>
            <div style={{color:"white"}}>Symbol { list.symbol}</div>
            <div style={{color:"white"}}>Hour {list.hourCotization}</div>
            <div style={{color:"white"}}>Price Ars {list.priceArs}</div>
            </>
            
        ))
    }
    


    </Container>

)

}

export default Quotation;
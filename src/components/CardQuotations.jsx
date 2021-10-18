import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({ 

    root: {
       backgroundColor:"#98FCEE",
      

    }
})


const CardQuotations = ({symbol,hour,price}) =>{
    const classes = useStyles();

    const handleBuy = () => {

        console.log(symbol.slice(0,-4))
    }

  return (
    <Box sx={{ minWidth: 100 }}>
      <Card className={classes.root} variant="outlined"><CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {symbol}
      </Typography>
      <Typography variant="h5" component="div">
      {price}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     {hour} 
      </Typography>
     
    </CardContent>
    <CardActions>
      <Button size="small" onClick={handleBuy}>Comprar</Button> <Button size="small">Vender</Button>
    </CardActions></Card>
    </Box>
  );
}

export default CardQuotations;
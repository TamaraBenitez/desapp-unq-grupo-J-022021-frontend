import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ListItem from "@mui/material/ListItem";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#98FCEE",
  },
  adjustGrid: {
    position: "absolute",
    left: "80%",
    paddingRight: "30px",

    ["@media (max-width:889px)"]: {
      position: "absolute",
      left: "55%",
      paddingRight: "2px",
    },
    ["@media (max-width:375px)"]: {
      position: "relative",
      left: 0,
      padding: "0px !important",
    },
  },
});

const CardQuotations = ({ symbol, hour, price }) => {
  const classes = useStyles();

  const handleBuy = () => {
    console.log(symbol.slice(0, -4));
  };

  return (
    <div>
      <ListItem sx={{ backgroundColor: "black", border: "1px solid grey" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography
            sx={{ color: "white", marginBottom: "15px", marginTop: "0px" }}
            variant="h5"
            component="div"
          >
            {symbol.slice(0, -4)}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography sx={{ color: "white" }} variant="h5" component="div">
              $ {price.replace(/[,.]/g, (m) => (m === "," ? "." : ","))} ARS
            </Typography>
            <Grid
              container
              sx={{ width: "auto" }}
              className={classes.adjustGrid}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                sx={{
                  color: "green",
                  border: "1px solid green",
                  width: "100px",
                }}
                onClick={handleBuy}
              >
                Comprar
              </Button>
              <Button
                sx={{
                  color: "red",
                  border: "1px solid red",
                  marginLeft: "10px",
                  width: "100px",
                }}
              >
                Vender
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ width: "auto" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                marginTop: "10px",
                paddingRight: "100px",
              }}
              component="div"
            >
              Last Update: {hour} hs
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
    </div>
  );
};

export default CardQuotations;

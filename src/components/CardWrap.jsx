import React from "react";
import {makeStyles} from "@mui/styles";
import {Card,Fade} from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 469,
      borderRadius: "4px",
      marginLeft:"8px",
      marginRight:"8px"
    },
    bullet: {
      display: "inline-block",
    },
  });
  
  
  
  const CardWrap = ({ children, style }) => {
    const classes = useStyles();
  
    return (
      <Fade timeout={1000} in={true}>
        <Card className={classes.root} style={style}>
          {children}
        </Card>
      </Fade>
    );
  };
  
  export default CardWrap;
  
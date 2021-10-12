import React from "react";
import {makeStyles} from "@mui/styles";
import {Card,Fade} from '@mui/material';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 469,
      borderRadius: "4px",
      marginLeft:"8px",
      marginRight:"8px",
      ['@media (max-width:768px)']: { 
        marginLeft:"90px!important",
        marginRight:"90px!important"
      },
      ['@media (max-width:725px)']: { 
        marginLeft:"70px!important",
        marginRight:"70px!important"
      },
      ['@media (max-width:579px)']: { 
        marginLeft:"40px!important",
        marginRight:"40px!important",
      },
      ['@media (max-width:550px)']: { 
        marginLeft:"20px!important",
        marginRight:"20px!important",
      },
      ['@media (max-width:472px)']: { 
        marginLeft:"5px!important",
        marginRight:"5px!important",
      },
      ['@media (max-width:401px)']: { 
        marginLeft:"0px!important",
        marginRight:"0px!important",
      }
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
  
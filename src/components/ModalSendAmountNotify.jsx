import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  Modal,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.1)",
      "& .MuiButton-root": {
        border: "1px solid #1976d2",
        color: "#1976d2",
        "&:hover": {
          background: "black",
        },
      },
    },
    modalBackground: {
      "&:focus": {
        outline: "none",
      },
      width: "350px",
      backgroundColor: theme.palette.grey[900],
      borderRadius: "4px",
      border: `1px solid black`,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    closeColorIcon: {
      position: "absolute",
      color: "grey",
      left: "700%",
    },
    buttonDistance: {
      marginRight: "17px!important",
    },
    save: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "white",
    },

    delete: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
      color: "grey",
    },
  })
);

const ModalSendAmountNotify = ({ isOpen, handleBack , userCancelledName}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={() => {}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.modalBackground} tabIndex={0}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
                <h3 className={classes.save}>{userCancelledName} send amount check bank account</h3>
            </Grid>
                  <Button onClick={handleBack}>continue transaction</Button>
               
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalSendAmountNotify;

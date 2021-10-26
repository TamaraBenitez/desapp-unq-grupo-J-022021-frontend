import CardWrap from "../components/CardWrap";
import Navbar from "../components/NavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_Transaction } from "../services/APITransaction";
const dayjs = require("dayjs");

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white!important",
    backgroundColor: "#392255!important",
    "&:hover": {
      backgroundColor: "#392255!important",
  },
  },
  disabledButton: {
    '&.MuiButton-root.Mui-disabled' : {
      backgroundColor: "grey!important",
      color:"black!important", 
      },
    },
  typographyStyle: {
    color: "white",
    fontSize: "16px",
    marginTop: "10px",
    paddingRight: "100px",
  },
}));

const Transaction = () => {
  const classes = useStyles();
  const { userId, activityId } = useParams();
  const [transactionData, setTransactionData] = useState();
  const [activeTransaction, setActiveTransaction] = useState(false);
  const [modalCancelOpen, setModalCancelOpen] = useState(false);
  const [sended, setSended] = useState(false);
  const [completeSend, setCompleteSend] = useState(false);

  useEffect(() => {
    getDataUserTransationToTransfer();
    userConnectedTransaction();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (transactionData === undefined) {
        getDataUserTransationToTransfer();
      }
      if (!activeTransaction) {
        userConnectedTransaction();
      }
      checkCompleteSend();
    }, 10000);
    return () => clearInterval(interval);
  });

  const checkCompleteSend = () => {
    API_Transaction.checkCompleteSend(userId)
      .then((res) => {
        setCompleteSend(res.data.active);
      })
      .catch((err) => {
        setModalCancelOpen(true);
      });
  };

  const userConnectedTransaction = () => {
    API_Transaction.checkInitTransaction()
      .then((response) => {
        setActiveTransaction(response.data.active);
      })
      .catch((error) => console.log(error));
  };

  const getDataUserTransationToTransfer = () => {
    API_Transaction.startTransaction(activityId, userId)
      .then((response) => {
        setTransactionData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const sendAmount = () => {
    API_Transaction.sendAmount().then((response) => {
      setSended(true);
    });
  };

  const handleClickSendAmount = () => {
    API_Transaction.checkCompleteSend(userId)
      .then((response) => {
        sendAmount();
      })
      .catch((error) => setModalCancelOpen(true));
  };

  const handleCancelTransaction = () => {
    API_Transaction.cancelTransaction();
  };

  const handleCompleteAndSendCripto = () => {
    API_Transaction.finishTransaction(activityId, userId).then((response) => {
      setSended(true); /*se ha completado la transaccion con exito modal  */
    });
  };

  const isBuy = () => {
    return transactionData.addrOrCvu.length > 8;
  };

  return (
    <Container disableGutters maxWidth={false} className="conteiner-color">
      <Navbar />

      <div style={{ marginTop: "50px" }}>
        <CardWrap
          style={{
            backgroundColor: "black",
            marginLeft: "20px",
            marginRight: "20px",
            height: "100px",
          }}
        >
          {activeTransaction && transactionData !== undefined && (
            <>
              <Typography className={classes.typographyStyle} component="div">
                Hora: {dayjs(transactionData.hour).format("HH:mm")} hs
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Criptoactivo:{transactionData.criptoName}
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Cantidad de criptoactivo: {transactionData.nominals}
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Cotizacion: ${transactionData.cotization} ARS
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Monto a negociar: ${transactionData.amountInArs} ARS
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Nombre y apellido : {transactionData.username}{" "}
                {transactionData.lastName}
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Operaciones realizadas : {transactionData.operations}
              </Typography>

              <Typography className={classes.typographyStyle} component="div">
                Reputación : {transactionData.reputation}
              </Typography>

              {(isBuy() && (
                <>
                  {" "}
                  <Typography
                    className={classes.typographyStyle}
                    component="div"
                  >
                    CVU :{transactionData.addrOrCvu}
                  </Typography>
                  <Button
                    className={classes.button}
                    classes={{disabled: classes.disabledButton}}
                    onClick={handleCompleteAndSendCripto}
                    disabled={!completeSend}
                  >
                    Liberar Criptoactivo
                  </Button>
                </>
              )) || (
                <>
                  <Typography
                    className={classes.typographyStyle}
                    component="div"
                  >
                    Direccion de billetera : {transactionData.addrOrCvu}
                  </Typography>
                  <Button
                    className={classes.button}
                    onClick={handleClickSendAmount}
                  >
                    Notificar envio
                  </Button>
                 
                </>
              )}

              <div style={{ paddingTop: "10px" }}></div>

              <Button
                className={classes.button}
                onClick={handleCancelTransaction}
              >
                Cancelar Transacción
              </Button>
            </>
          )}
        </CardWrap>
      </div>
    </Container>
  );
};

export default Transaction;

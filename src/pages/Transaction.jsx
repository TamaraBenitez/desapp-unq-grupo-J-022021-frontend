import CardWrap from "../components/CardWrap";
import Navbar from "../components/NavBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_Transaction } from "../services/APITransaction";
import ModalTransactionCanceled from "../components/ModalTransactionCanceled";
import ModalTransactionCompleted from "../components/ModalTransactionCompleted";
import ModalSendAmountNotify from "../components/ModalSendAmountNotify";
import { useModalTransaction } from "../components/modalStartTransactionProvider/hooks";
import toast from "react-hot-toast";
import {FormattedNumber} from 'react-intl'
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
    "&.MuiButton-root.Mui-disabled": {
      backgroundColor: "grey!important",
      color: "black!important",
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
  const [render, setRender] = useState(true);
  const history = useHistory();
  const {block,unblock}=useModalTransaction()


  useEffect(() => {
    block()
    getDataUserTransationToTransfer();
    userConnectedTransaction();
    return ()=>unblock()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      if (transactionData === undefined && !modalCancelOpen) {
        getDataUserTransationToTransfer();
      }
      if (!activeTransaction) {
        userConnectedTransaction();
      }
      if(!sended || !completeSend){
        console.log("exec")
      checkCompleteSend();
    }
    }, 5000);
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
      .catch((error) =>{});
  };

  const getDataUserTransationToTransfer = () => {
    API_Transaction.startTransaction(activityId, userId)
      .then((response) => {
        setTransactionData(response.data);
      })
      .catch((error) => {});
  };

  const sendAmount = () => {
    API_Transaction.sendAmount();
  };

  const handleClickSendAmount = () => {
    API_Transaction.checkCompleteSend(userId)
      .then((response) => {
        sendAmount();
        toast.success("Se ha enviado el monto a la cuenta de destino");
      })
      .catch((error) => setModalCancelOpen(true));
  };

  const handleCancelTransaction = () => {
    toast.error('Transaction was canceled')
    API_Transaction.cancelTransaction();
    history.push("/quotations")
  };

 

  const handleCompleteAndSendCripto = () => {
    API_Transaction.finishTransaction(activityId, userId).then((response) => {
      setSended(true); /*se ha completado la transaccion con exito modal  */
    });
  };

  const isBuy = () => {
    return transactionData?.addrOrCvu?.length > 8;
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
                Cotizacion: <FormattedNumber value={transactionData.cotization} style={"currency"} currency="ARS"/> 
              </Typography>
              <Typography className={classes.typographyStyle} component="div">
                Monto a negociar: <FormattedNumber value={transactionData.amountInArs} style={"currency"} currency="ARS"/>
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
                    onClick={handleClickSendAmount}
                  >
                    Notificar envio
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
                    classes={{ disabled: classes.disabledButton }}
                    onClick={handleCompleteAndSendCripto}
                    disabled={!completeSend}
                  >
                    Liberar Criptoactivo
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
      <ModalTransactionCanceled
        isOpen={modalCancelOpen && !sended & !completeSend}
        handleBack={() => history.push("/quotations")}
        userCancelledName={transactionData?.username}
      />
      <ModalTransactionCompleted
        isOpen={isBuy() ? completeSend : sended}
        handleBack={() =>{unblock() ; history.push("/quotations")}}
      />
      {render && (
        <ModalSendAmountNotify
          isOpen={isBuy() ? false : completeSend}
          handleBack={() => {
            setRender(false);
          }}
          userCancelledName={transactionData?.username}
        />
      )}
    </Container>
  );
};

export default Transaction;

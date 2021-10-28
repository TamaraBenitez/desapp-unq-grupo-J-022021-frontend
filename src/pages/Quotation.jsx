import Container from "@mui/material/Container";
import React from "react";
import { useEffect } from "react";
import { API_Quotations } from "../services/APIListQuotation";
import "../styles/welcome.css";
import { useTranslation } from "react-i18next";
import CardQuotations from "../components/CardQuotations";
import CardWrap from "../components/CardWrap";
import Navbar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
const dayjs = require("dayjs");

const Quotation = () => {
  const [listQuotation, setListQuotation] = React.useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    getQuotations();
    // eslint-disable-next-line
  }, []);

  const getQuotations = () => {
    API_Quotations.getQuotations().then((response) => {
      setListQuotation(response.data);
    });
  };

  return (
    <Container disableGutters maxWidth={false} className="conteiner-color">
      <Navbar />

      <div className="container-welcome">
        <span className="welcome"> {t("Cotizations")} </span>
      </div>

      <div style={{ marginTop: "100px" }}>
        <CardWrap
          style={{
            backgroundColor: "black",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {listQuotation.map((list) => (
            <CardQuotations
              key={list.symbol}
              symbol={list.symbol.slice(0, -4)}
              hour={dayjs(list.hourCotization).format("HH:mm")}
              price={list.priceArs}
            />
          ))}
        </CardWrap>
      </div>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              color: "white",
              background: "black",
            },
          },
          error: {
            style: {
              color: "white",
              background: "black",
            },
          },
        }}
      />
    </Container>
  );
};

export default Quotation;

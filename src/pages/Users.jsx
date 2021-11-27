import { useEffect, useState } from "react";
import { API_Users } from "../services/APIUsers";
import Container from "@mui/material/Container";
import CardWrap from "../components/CardWrap";
import Navbar from "../components/NavBar";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Counter from "../images/acuerdo.png";
import Reputation from "../images/reputation.png";
import { useTranslation } from "react-i18next";

const Users = () => {
  const [users, setUsers] = useState([]);
  const {t} = useTranslation()

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    API_Users.getUsers().then((response) => {
      setUsers(response.data);
    });
  };

  

  return (
    <Container disableGutters maxWidth={false} className="conteiner-color">
      <Navbar />

      <div className="container-welcome">
        <span className="welcome"> Users </span>
      </div>

      <div style={{ marginTop: "100px" }}>
        <CardWrap
          style={{
            backgroundColor: "black",
            marginLeft: "20px",
            marginRight: "20px",
          }}
        >
          {" "}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {users.map((user) => (
              <Card variant="outlined" sx={{ maxWidth: 345, marginLeft: 5 , marginTop:2 , border:'1px solid grey', backgroundColor:'black' }}>
                <CardHeader
                  avatar={<Avatar>{user.name[0]}</Avatar>}
                  title={`${user.name} ${user.lastName}`} style={{color:'white' , fontFamily: 'italic'}}
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  style={{ marginLeft: 15 ,   marginBottom:5 }}
                >
                  {" "}
                  <img src={Counter} width="40" alt="" />{" "}
                  <div style={{ marginLeft: 12 , color:'white'  }}>
                    {" "}
                    {user.operations} {t("operations")}{" "}
                  </div>{" "}
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  style={{ marginLeft: 15 ,  marginBottom:10 }}
                >
                  <img src={Reputation} width="40" alt="" />{" "}
                  <div style={{ marginLeft: 12 ,color:'white'  }}>
                    {" "}
                    {user.reputation} {t("reputation")}{" "}
                  </div>
                </Grid>
              </Card>
            ))}{" "}
          </Grid>
        </CardWrap>
      </div>
    </Container>
  );
};

export default Users;

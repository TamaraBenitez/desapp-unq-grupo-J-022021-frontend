import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Logo from "../images/logo.png";

const NavBar = ({ children }) => {

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  style={{ backgroundColor:"transparent"}}>
          <Toolbar>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src={Logo}
                  width="150px"
                  height="50px"
                  style={{ paddingTop: 10 }}
                  alt="logo"
                />
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
};

export default NavBar;

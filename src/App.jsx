import './App.css';
import React from 'react';
import { BrowserRouter, Switch,Redirect, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Quotation from './pages/Quotation';
import { createTheme, ThemeProvider} from '@mui/material/styles';


const App = () => {

    const theme = createTheme({
        status: {
          danger: "red",
        },
      });


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter> 
          <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/quotations" component={Quotation} />

              <Redirect from="/" to="/register" />
          </Switch>
      </BrowserRouter>
      </ThemeProvider>
  );

}

export default App;

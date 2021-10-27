import './App.css';
import React from 'react';
import { BrowserRouter, Switch,Redirect, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Quotation from './pages/Quotation';
import Transaction from './pages/Transaction';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ModalTransaction from './components/ModalTransaction';
import ModalProvider from './components/backModalProvider';


const App = () => {

    const theme = createTheme({
        status: {
          danger: "red",
        },
      });


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ModalProvider> 
          <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/quotations" component={Quotation} />
              <Route path="/transactions/negociate/:userId/activity/:activityId" component={Transaction}/>
              <Route path="/model" component={ModalTransaction}/>
              <Redirect from="/" to="/login" />
          </Switch>
        </ModalProvider>
      </BrowserRouter>
      </ThemeProvider>
  );

}

export default App;

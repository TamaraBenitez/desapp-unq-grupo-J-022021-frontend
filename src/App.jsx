import './App.css';
import React from 'react';
import { BrowserRouter, Switch,Redirect, Route} from 'react-router-dom';
import Register from './Register';
import Login from './pages/Login';

const App = () => {

  return (
      <BrowserRouter> 
          <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Redirect from="/" to="/register" />
          </Switch>
      </BrowserRouter>
  );

}

export default App;

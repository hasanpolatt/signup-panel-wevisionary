import React, { Fragment } from 'react';
import { Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { Container } from '@material-ui/core';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth='md'>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Fragment>
      </Container>
    </>
  );
}

export default App;

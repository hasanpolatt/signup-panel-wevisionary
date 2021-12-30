import React, { Fragment } from 'react';
import { Switch, Link, Route, Router, Routes, NavLink } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Container } from '@material-ui/core';
import './index.css';

function App() {
  return (
    // <Container maxWidth='md'>
    //     <div className="app">


    //       <Link to={"/sign-in"}>Home Page</Link>
    //       <Link to={"/sign-in"}>Login</Link>
    //       <Link to={"/sign-up"}>Sign up</Link>

    //       <Routes>
    //         <Route exact path='/' element={Login} />
    //         <Route path="/sign-up" element={SignUp} />
    //       </Routes>

    //     </div>
    // </Container>
    <Container maxWidth='md'>
      <Fragment>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName="active" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/signup">
                SignUp
              </NavLink>
            </li>


          </ul>
        </nav>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          {/* <Route path="/user/:id" component={User} /> */}
        </Switch>
      </Fragment>
    </Container>
  );
}

export default App;

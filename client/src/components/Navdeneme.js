import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to={"/sign-in"}>Home Page</Link>
      <Link className="nav-link" to={"/sign-in"}>Login</Link>
      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
    </div>
  )
}

export default NavBar;

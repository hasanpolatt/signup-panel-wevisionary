import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='mb-2'>
      <nav className="navbar">
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            Visionary
          </Link>
          <ul className='nav-menu'>
            <li>
              <Link to='/signup' className='nav-links'>
                SignUp
              </Link>
            </li>
            <li>
              <Link to='/login' className='nav-links'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
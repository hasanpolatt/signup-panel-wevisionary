import { Button, Divider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';

function Login() {
  return (
    <div className='container'>
      <div className='icon'>
        <PersonIcon fontSize='large' />
        <div className='text'>Log in</div>
      </div>

      <TextField id='email' type='text' variant='filled' label='Enter email' /><br />
      <TextField id='password' type='text' variant='filled' label='Enter password' /><br />
      <Button style={{ margin: "1em" }} variant='contained' color='primary'>Create Account</Button>

      <div className='divider'>
        <Divider />
      </div>
      
      <p className='mt-2'>
        <Link to='/signup'>
          <h5>Create Account</h5>
        </Link>
      </p>
    </div>
  )
}

export default Login;

import React from 'react';
import { Button, Divider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function SignUp() {
  return (
    <div>
      <div className='icon'>
        <PersonAddIcon fontSize='large' />
        <div className='text'>Sign Up</div>
      </div>

      <div className='container'>
        <div><TextField id='firstname' type='text' variant='filled' label='Enter first name' /></div>
        <div><TextField id='lastname' type='text' variant='filled' label='Enter last name' /></div>
        <div><TextField id='email' type='text' variant='filled' label='Enter email' /></div>
        <div><TextField id='password' type='password' variant='filled' label='Enter password' /></div>
        <Button style={{ margin: "1em" }} variant='contained' color='primary'>Create Account</Button>

        <div className='divider'>
          <Divider />
        </div>

        <p className='mt-2'>
          <Link to='/login'>
            <h5>Already have an account?</h5>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp;

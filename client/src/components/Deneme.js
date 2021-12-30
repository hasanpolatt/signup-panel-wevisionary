import React from 'react';
import { Button, Divider, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Deneme() {
  return (
    <div>
      <div className='icon'>
        <div className='icon-class'>
          <PersonAddIcon fontSize='large' />
        </div>
        <div className='text'>Log in</div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <TextField id='firstname' type='text' variant='outlined' label='Enter first name' fullWidth />
        </div>
        <div className='col-6'>
          <TextField id='firstname' type='text' variant='outlined' label='Enter last name' fullWidth />
        </div>
      </div>

      <div className='row m-2'>
        <TextField id='email' type='text' variant='outlined' label='Enter email' fullWidth />
        <TextField id='password' type='text' variant='outlined' label='Enter password' fullWidth />
        <FormControlLabel control={
          <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize='small' />} checkedIcon={<CheckBoxIcon fontSize='small' />} name='checkedI' />
        }
        label='I agree to all terms and conditions.' 
        />
        <Button variant='contained' color='primary'>Log in</Button>
      </div>

      <Divider variant='middle' />
      <p className='text-center'>
        <Link to='login'>
          Already have an account?
        </Link>
      </p>
    </div>
  )
}

export default Deneme;

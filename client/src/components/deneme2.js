<div className='container'>
  <div className='icon'>
    <div className='icon-class'></div>
    <div className='text'>SignUp</div>
  </div>

  <div className='row m-2'>
    <div className='col-6 p-2'>
      <TextField id='firstname' type='text' variant='outlined' label='Enter first name' fullWidth />
    </div>
    <div className='col-6 p-2'>
      <TextField id='firstname' type='text' variant='outlined' label='Enter last name' fullWidth />
    </div>
  </div>

  <div className='row m-2'>
    <TextField id='email' className='p-2' type='text' variant='outlined' label='Enter email' fullWidth />
    <TextField id='password' className='p-2' type='text' variant='outlined' label='Enter password' fullWidth />
    <Button variant='contained' color='primary'>Create Account</Button>
  </div>
  <Divider variant='middle' />
  <p className='text-center'>
    <Link to='login' className='text-black-50'>
      <h5>Already have an account?</h5>
    </Link>
  </p>
</div>
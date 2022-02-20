import React from 'react';
import '../../css/login.css';
import {Paper, Typography, Button, TextField, Link} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const MainPaper = styled(Paper)(({ theme }) => ({
  height:'30rem',
  width:'25rem',
  textAlign:'center'
}));

export default function Login(props) {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <MainPaper elevation={5}>
        <Typography variant='h3'>
          Login
        </Typography>
        <div className='inputs'>
          <TextField id="standard-basic" label="Username" variant="standard" error={props.usernameError}/>
          <br/>
          <div className='input-password'>
            <TextField id="standard-basic" type='password' label="Password" variant="standard" error={props.passwordError} />
          </div>
        </div>
        <div className='forget-container'>
          <Link component='button' onClick={()=>{navigate('/forgetPassword')}} underline="hover">
            {'Forget Password'}
          </Link>
        </div>
        <div className='button-container'>
          <Button variant='outlined'>
            Login
          </Button>
        </div>
        <div className='signup-container'>
          <Link component='button' onClick={()=>{navigate('/signup')}} underline="hover">
            {'New User'}
          </Link>
        </div>
      </MainPaper>
    </div>
  );
}

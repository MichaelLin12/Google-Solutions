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
          <TextField id="email" label="Email" variant="standard" error={props.emailError} onChange={props.updateEmail}/>
          <br/>
          <div className='input-password'>
            <TextField id="password" type='password' label="Password" variant="standard" error={props.passwordError} onChange={props.updatePassword}/>
          </div>
        </div>
        <div className='button-container'>
          <Button variant='outlined' onClick={()=>{props.login()}}>
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

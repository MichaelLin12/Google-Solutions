import React from 'react';
import '../../css/login.css';
import {Paper, Typography, Button, TextField, Link} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const MainPaper = styled(Paper)(({ theme }) => ({
  height:'25rem',
  width:'25rem',
  textAlign:'center'
}));

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <MainPaper elevation={5}>
        <Typography variant='h3'>
          Login
        </Typography>
        <div className='inputs'>
          <TextField id="standard-basic" label="Username" variant="standard" error={false}/>
          <br/>
          <div className='input-password'>
            <TextField id="standard-basic" type='password' label="Password" variant="standard" error={false} />
          </div>
        </div>
        <div className='button-container'>
          <Button variant='outlined'>
            Login
          </Button>
        </div>
        <div className='link-container'>
          <Link component='button' onClick={()=>{navigate('/forgetPassword')}} underline="hover">
            {'Forget Password'}
          </Link>
        </div>
      </MainPaper>
    </div>
  );
}

import React from 'react';
import Box from '@mui/material/Box';
import { Grid,Typography,Button, AppBar, Toolbar, IconButton, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';

const StartButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    margin: '1rem',
    backgroundColor: '#FFF345',
    '&:hover': {
      backgroundColor: '#000000',
    },
  }));
  
  const StyledButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#FFF345',
    '&:hover': {
      backgroundColor: '#000000',
    },
  }));
  
  const Styledappbar = styled(AppBar)(({theme}) =>({
    backgroundColor:'#000000',
    display:'flex',
    height:'10vh'
  }));

export default function Profile(){
    return (
        <div>
            <Styledappbar position='sticky' elevation={4}>
                <Toolbar>
                    <Typography variant='h4' sx={{flex:1}}>
                        Eden's Garden
                    </Typography>
                    <StartButton >
                        Login
                    </StartButton>
                    <StartButton>
                        Profile
                    </StartButton>
                </Toolbar>
            </Styledappbar>
            <div style={{backgroundColor:'#769867', height:'90vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <Paper>
                  Hello World
              </Paper>
            </div>
        </div>
    );

}

import React from 'react';
import Box from '@mui/material/Box';
import { Grid,Typography,Button, AppBar, Toolbar, IconButton, Container } from '@mui/material';
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
  }));

export default function Profile(){
    return (
        <div>
            <Styledappbar position='fixed' elevation={4}>
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
        <Container sx={{
            position: 'relative',
            top: "20rem",
            width: "30rem",
            height: "30rem",
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
          <Typography variant="h3">Welcome to the profile page</Typography>
          </Container>
          </div>
    );

}

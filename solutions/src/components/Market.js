import React from 'react';
import { AppBar, Toolbar, Typography, Button, Drawer, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Navigate, useNavigate} from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import '../css/market.css';
import Display from './Display';

const Styledappbar = styled(AppBar)(({theme}) =>({
  backgroundColor:'#000000',
  display:'flex',
  zIndex:1
}));


const StartButton = styled(Button)(({ theme }) => ({
  color: 'theme.pallette.text',
  backgroundColor: 'theme.pallete.main',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

export default function Market() {
  const navigate = useNavigate();
  const startButtonClick = function(){
    navigate("/login")
  }

  return (
    <div className='main'>
      <div className='appbar'>
        <Styledappbar position='fixed' elevation={4}>
          <Toolbar>
            <Typography variant='h4' sx={{flex:1}}>
              Eden's Garden
            </Typography>
            <StartButton onClick={startButtonClick}>
              Login
            </StartButton>
          </Toolbar>
        </Styledappbar>
      </div>
      <div className='box'>
        <div className='navigationbar'>
          <List sx={{paddingTop:'4rem'}}>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Inbox" />
              </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
            <Divider/>
          </List>
        </div>
        <div className='display'>
          <Display/>
        </div>
      </div>
    </div>
  )
}


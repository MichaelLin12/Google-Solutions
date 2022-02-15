import React from 'react';
import {AppBar, Toolbar, Drawer, IconButton, Typography, Button} from '@mui/material'
import '../css/Market.css';

export default function Market() {
  return (
  <div className='market'>
    <div className='appbar'>
    <AppBar position="static" sx={{height:'100%'}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    <div className='item2'>
      <div className='navbar'>
        <Drawer anchor='left' variant='permanent'>
          Market
          Cart
        </Drawer>
      </div>
      <div className='content'>
        This is the content space
      </div>
    </div>
  </div>
  );
}

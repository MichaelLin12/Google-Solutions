import * as React from 'react';
import { Toolbar, AppBar, Typography,Button,List,ListItem,ListItemButton,Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import '../css/market.css'
import Appbar from './Entry/Appbar.js'


export default function Market(props) {

  //change all number to props.item
  let number = [1,2,3,4]
  const items=number.map((e,i)=>{
      if(i === 0 || i === number.length)
      {
        return (
        <ListItem>
          {e}
        </ListItem>
        );
      }else{
        return(
          <div>
            <ListItem>
              {e}
            </ListItem>
            <Divider light/>
          </div>
        )
      }
  })

  return (
    <div className='market'>
      <Appbar/>
      <div className='main'>
        <div className='navbar'>
          <List>
            <ListItemButton>
              <Typography>
                Hello
              </Typography>
            </ListItemButton>
          </List>
        </div>
        <div className='body'>
          <List>
            {items}
          </List>
        </div>
      </div>
    </div>
  );
}

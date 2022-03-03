import * as React from 'react';
import {List,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import '../../css/market.css'
import Appbar from '../Entry/Appbar.js'
import Items from './Items.js'
import ShopIcon from '@mui/icons-material/Shop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import History from './History.js'
import Cart from './Cart.js'
import { useState } from 'react';


export default function Market(props) {
  const [page, setPage] = useState('Market');

  const view = function(){
    if(page ==='Market'){
      return <Items/>
    }else if(page === 'Cart')
    {
      return <Cart/>
    }else{
      return <History/>
    }
  }

  return (
    <div className='market'>
      <Appbar searchbar={true}/>
      <div className='main'>
        <div className='navbar'>
          <List>
            <ListItemButton onClick={()=>{setPage('Market')}}>
              <ListItemIcon>
                <ShopIcon/>
              </ListItemIcon>
              <ListItemText primary='Market'/>
            </ListItemButton>
            <ListItemButton onClick={()=>{setPage('Cart')}}>
              <ListItemIcon>
                <ShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText primary='Cart'/>
            </ListItemButton>
            <ListItemButton onClick={()=>{setPage('History')}}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faHistory} />
              </ListItemIcon>
              <ListItemText primary='History'/>
            </ListItemButton>
          </List>
        </div>
        <div className='body'>
          {view()}
        </div>
      </div>
    </div>
  );
}

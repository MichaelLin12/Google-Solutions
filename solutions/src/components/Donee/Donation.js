import React,{useState} from 'react'
import Appbar from '../Entry/Appbar.js'
import '../../css/Donee.css'
import {List,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory,faDove } from '@fortawesome/free-solid-svg-icons';
import Donate from './Donate'
import History from './History'


export default function Donation() {
  const [page,setPage] = useState('Donate');

  const view = ()=>{
    if(page=== 'Donate')
    {
      return <Donate/>
    }else{
      return <History/>
    }
  }


  return (
    <div className='donee'>
      <Appbar/>
      <div className='main'>
        <div className='navbar'>
          <List>
            <ListItemButton onClick={()=>{setPage('Donate')}}>
              <ListItemIcon>
                <FontAwesomeIcon icon={faDove}/>
              </ListItemIcon>
              <ListItemText primary='Donate'/>
            </ListItemButton>
            <ListItemButton  onClick={()=>{setPage('History')}}>
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
  )
}

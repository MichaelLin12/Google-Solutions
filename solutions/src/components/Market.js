import * as React from 'react';
import { Toolbar, AppBar, Typography,Button,List,ListItem,ListItemButton,Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import '../css/market.css'


const Styledappbar = styled(AppBar)(({theme}) =>({
  backgroundColor:'#000000',
  display:'flex',
  height:'64px',
  zIndex:theme.zIndex.drawer+1
}));

const StartButton = styled(Button)(({ theme }) => ({
  color: 'theme.pallette.text',
  backgroundColor: 'theme.pallete.main',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));


export default function Market(props) {

  let navigate = useNavigate();

  let startButtonClick = ()=>{
    navigate('/login');
  }

  const items=props.items.map((e,i)=>{
      if(i === 0 || i === props.items.length)
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
      <Styledappbar position='sticky'>
        <Toolbar>
          <Typography variant='h6' sx={{flex:1}}>
            Eden's Garden
          </Typography>
          <StartButton onClick={startButtonClick}>
            Login
          </StartButton>
        </Toolbar>
      </Styledappbar>
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

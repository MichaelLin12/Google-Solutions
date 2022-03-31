import React from 'react';
import Appbar from './Appbar'
import '../../css/AboutUs.css'
import {Paper,List,ListItem, ListItemText} from '@mui/material';

export default function AboutUs() {
  return (
    <div className='portrait'>
        <Appbar/>
        <Paper elevation={5} sx={{height:'30rem', width:'25rem'}}>
          <div className='slate2'>
            <List>
              <ListItem>
                <ListItemText>
                                    Hello! We are Michael, Aditya and Leo, the creators of Eden's garden. We are computer science students at the University of Wisconsin, Madison.
                                    We made this website in participation of the google solutions 2022, with the goal of tackling the problem of massive food waste. This is esecilly
                                    prevanet in the united steates. The goal of this website is to connect two different groups: people in shortage of food and people in surlus of
                                    food. The idea is that on short notice, we are able to flatten the distribution of food as to decrease excess food that goes to waste.
                 </ListItemText>
                </ListItem>
              </List>
            </div>
        </Paper>
    </div>
  )
}

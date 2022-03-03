import React from 'react'
import {List,ListItem,Divider} from '@mui/material'

export default function History() {

  let orders = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const items = orders.map((e,i)=>{
    if( i === orders.length-1)
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
    <div>
      <List>
        {items}
      </List>
    </div>
  )
}

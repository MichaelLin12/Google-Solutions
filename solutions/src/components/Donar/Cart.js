import React from 'react'
import {List,ListItem,Divider} from '@mui/material'

export default function Cart() {

  let orders = [1,2,3,4,5];

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

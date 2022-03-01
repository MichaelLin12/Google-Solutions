import React from 'react'
import {List,ListItem,Divider} from '@mui/material'

export default function Items() {

     //change all number to props.item
  let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  const items=number.map((e,i)=>{
      if( i === number.length)
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

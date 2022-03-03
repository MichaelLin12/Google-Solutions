import React from 'react'
import {List,ListItem,Divider,Typography,Button} from '@mui/material'
import '../../css/Items.css'

export default function Items() {

     //change all number to props.item
  let data = [{name:'Cheerios',qt:2,description:'hello world',location:'Milwaukee,WI',expiration:'2/3/2024',pic:'fjklds'},{name:'Cheerios',qt:2,description:'hello world',location:'Milwaukee,WI',expiration:'2/3/2024',pic:'fjklds'}]
  const items=data.map((e,i)=>{
      if( i === data.length-1)
      {
        return (
        <ListItem>
          <div className='item'>
            <div className='left'>
              <Typography>
              {e.name}
              </Typography>
              <Typography>
              {e.pic}
              </Typography>
            </div>
            <div className='center'>
              <Typography>
                Quantity:{e.qt}
              </Typography>
              <Typography>
                Description:{e.description}
              </Typography>
              <Typography>
                Location:{e.location}
              </Typography>
              <Typography>
                Expiration Date:{e.expiration}
              </Typography>
            </div>
            <div className='right'>
              <div>
                <Button variant='contained' sx={{float:'right'}}>
                  Order
                </Button>
              </div>
            </div>
          </div>
        </ListItem>
        );
      }else{
        return(
          <div>
            <ListItem>
              <div className='item'>
                <div className='left'>
                  <Typography>
                  {e.name}
                  </Typography>
                  <Typography>
                  {e.pic}
                  </Typography>
                </div>
                <div className='center'>
                  <Typography>
                    Quantity:{e.qt}
                  </Typography>
                  <Typography>
                    Description:{e.description}
                  </Typography>
                  <Typography>
                    Location:{e.location}
                  </Typography>
                  <Typography>
                    Expiration Date:{e.expiration}
                  </Typography>
                </div>
                <div className='right'>
                  <div>
                    <Button variant='contained' sx={{float:'right'}}>
                      Order
                    </Button>
                  </div>
                </div>
              </div>
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

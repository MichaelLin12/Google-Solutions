import React from 'react';
import { Paper,Button,TextField } from '@mui/material';
import '../../css/Donee.css';

export default function Donate() {
  return (
    <div className='donate'>
      <Paper sx={{height:'25rem', width:'50rem'}}>
        <div>
          <Button variant="contained" component="label">
            Upload Picture
            <input type="file" hidden/>
          </Button>
          <TextField size='small' variant='filled' label='Name'/>
        </div>
      </Paper>
    </div>
  )
}

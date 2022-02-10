import React from 'react';
import { Grid,Typography,Button } from '@mui/material';
import { styled } from '@mui/material/styles'

const StartButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#FFF345',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

export default function Home() {
  return (
    <Grid container columns={1}>
      <Grid item  sx={{ bgcolor: '#cfe8fc', height: '25rem', width:'100%', textAlign: 'center'}}>
        <Typography variant='h2' sx={{fontWeight:'bold', color:'#FFFFFF',marginBottom:'5rem'}}>
          Eden's Garden
        </Typography>
        <Typography variant='subtitle1' sx={{ color:'#FFFFFF'}}>
          Every year, the US wastes about 40% of the food it produces.
        </Typography>
        <Typography variant='subtitle1' sx={{ color:'#FFFFFF'}}>
          Meanwhile, over 41 million people in the US face hunger.
        </Typography>
        <Typography variant='subtitle1' sx={{marginBottom:'5rem', color:'#FFFFFF'}}>
          At Eden's Garden, We make sure this doesn't happen
        </Typography>
        <StartButton variant='contained'>Help Us</StartButton>
      </Grid>
      <Grid item textAlign='center' sx={{ bgcolor: '#f32432', height: '25rem', width:'100%'}}>
        Hello World
      </Grid>
    </Grid>
  );
}

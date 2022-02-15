import React from 'react';
import { Grid,Typography,Button, AppBar, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Charity from '../../images/charityHelp.jfif';
import '../../css/Home.css';
import Kids from '../../images/hunger.jfif';
import FaceIcon from '@mui/icons-material/Face';
import DeleteIcon from '@mui/icons-material/Delete';


const StartButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#FFF345',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#FFF345',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

const Styledappbar = styled(AppBar)(({theme}) =>({
  backgroundColor:'#000000',
  display:'flex',
}));


export default function Home() {
  let navigate = useNavigate();

  let startButtonClick = ()=>{
    navigate('/login');
  }



  return (
    <div>
      <Styledappbar position='fixed' elevation={4}>
        <Toolbar>
          <Typography variant='h4' sx={{flex:1}}>
            Eden's Garden
          </Typography>
          <StartButton onClick={startButtonClick}>
            Login
          </StartButton>
        </Toolbar>
      </Styledappbar>
      <Grid container columns={1}>
        <Grid item  sx={{  height: '25rem', width:'100%', marginTop:'2rem'}}>
          <Grid container column='2'>
            <Grid item sx={{width:'50%',height:'25rem', textAlign:'center', backgroundColor:'#345566'}}>
              <Typography variant='subtitle1' sx={{ color:'#FFFFFF', marginTop:'5rem'}}>
              Every year, the US wastes about 40% of the food it produces.
              </Typography>
              <Typography variant='subtitle1' sx={{ color:'#FFFFFF'}}>
                Meanwhile, over 41 million people in the US face hunger.
              </Typography>
              <Typography variant='subtitle1' sx={{marginBottom:'5rem', color:'#FFFFFF'}}>
                At Eden's Garden, We make sure this doesn't happen.
              </Typography>
              <StartButton onClick={startButtonClick} variant='contained'>Help Us</StartButton>
            </Grid>
            <Grid item sx={{backgroundColor: '#034789', width:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src={Charity} alt='Charity' className='image'/>
            </Grid>
          </Grid>
          <Grid item sx={{backgroundColor:'#879532', height:'25rem', width:'100%', marginTop:'2rem'}}>
            <Grid container column='2'>
              <Grid item sx={{width:'50%',height:'25rem', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#A42196'}}>
                <img src={Kids} alt='Child goes hungry' className='image'/>
              </Grid>
              <Grid item sx={{width:'50%',height:'25rem', textAlign:'center', backgroundColor:'#042196', color:'#FFFFFF'}}>
                  <Typography variant='subtitle1' sx={{ marginTop:'10rem'}}>
                    About 38 million households face some level of food insecurity.
                  </Typography>
                  <Typography variant='subtitle1' sx={{ marginBottom:'2rem'}}>
                    This includes 12 million children.
                  </Typography>
                  <StyledButton onClick={()=>{window.location = "https://www.feedingamerica.org/hunger-in-america"}}>Read More</StyledButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{backgroundColor:'#099562', height:'25rem', width:'100%', marginTop:'2rem'}}>
            Hello World
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

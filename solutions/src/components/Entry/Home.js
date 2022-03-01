import React from 'react';
import { Grid,Typography,Button, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Charity from '../../images/charityHelp.jfif';
import '../../css/Home.css';
import Kids from '../../images/hunger.jfif';
import Appbar from './Appbar.js'


const StartButton = styled(Button)(({ theme }) => ({
  color: 'theme.pallette.text',
  backgroundColor: 'theme.pallete.main',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: 'theme.pallette.text',
  backgroundColor: 'theme.pallete.main',
  '&:hover': {
    backgroundColor: '#000000',
  },
}));


export default function Home() {
  let navigate = useNavigate();

  let startButtonClick = ()=>{
    navigate('/login');
  }



  return (
    <div>
      <Appbar />
      <Grid container columns={1}>
        <Grid item  sx={{  height: '25rem', width:'100%', marginTop:'5rem'}}>
          <Grid container column='2' sx={{padding:'1rem'}}>
            <Grid item sx={{width:'47%',height:'25rem', textAlign:'center', backgroundColor:'#345566', borderRadius: '3.125rem', boxShadow:'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem', marginRight:'5%'}}>
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
            <Grid item sx={{backgroundColor: '#034789', width:'47%', display:'flex', alignItems:'center', justifyContent:'center', borderRadius: '3.125rem', boxShadow:'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem'}}>
              <img src={Charity} alt='Charity' className='image'/>
            </Grid>
          </Grid>
          <Grid item sx={{ height:'25rem', width:'100%'}}>
            <Grid container  sx={{padding:'1rem'}} >
              <Grid item sx={{width:'47%',height:'25rem', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#A42196', borderRadius: '3.125rem', boxShadow:'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem', marginRight:'5%'}}>
                <img src={Kids} alt='Child goes hungry' className='image'/>
              </Grid>
              <Grid item sx={{width:'47%',height:'25rem', textAlign:'center', backgroundColor:'#042196', color:'#FFFFFF',borderRadius: '3.125rem', boxShadow:'rgba(0, 0, 0, 0.24) 0rem 0.1875rem 0.5rem'}}>
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
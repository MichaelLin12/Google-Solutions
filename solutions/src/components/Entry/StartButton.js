import React from 'react';
import {useNavigate} from 'react-router-dom';
import PersonOutline from '@mui/icons-material/PersonOutline';
import {IconButton, Popper, Box, Link} from '@mui/material'
import {authentication} from '../../firebase.js'
import { useState } from 'react';

export default function StartButton() {
    const [anchorEl, setAnchorEl] = useState(null);

    let navigate = useNavigate();
    const auth = authentication

    let startButtonClick = ()=>{
        navigate('/login');
    }

    const checkAuthentication = function(){
        const user = auth.currentUser;
        return user;
    }

    const handleClick = function(event){
        setAnchorEl(anchorEl ? null : event.currentTarget);
    }

    const open = Boolean(anchorEl);

    if(!checkAuthentication()){
        return (
            <div>
                <IconButton size='large' sx={{color:'#FFFFFF'}} onClick={startButtonClick}>
                    <PersonOutline />
                </IconButton>
            </div>
        )
    }else{
        console.log("Hello World");
        return(
            <div>
                <IconButton size='large' sx={{color:'#FFFFFF'}} onClick={handleClick}>
                    <PersonOutline />
                </IconButton>
                <Popper open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: '#FFFFFF', zIndex:101,borderRadius:'5px',textAlign:'center'}}>
                        <Link component='button' underline='hover'>Profile Page
                        </Link><br/>
                        <Link component='button' underline='hover'>About Us
                        </Link><br/>
                        <Link component='button' underline='hover'>Logout
                        </Link>
                    </Box>
                </Popper>
            </div>
        )
    }
}

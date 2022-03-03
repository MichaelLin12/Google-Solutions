import React from 'react';
import {useNavigate} from 'react-router-dom';
import {IconButton, Popper, Box, Link} from '@mui/material'
import {authentication} from '../../firebase.js'
import { useState } from 'react';
import { signOut } from "firebase/auth";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import {colorPalette} from '../Theme.js';

export default function StartButton() {
    const [anchorEl, setAnchorEl] = useState(null);

    let navigate = useNavigate();
    const auth = authentication

    let startButtonClick = ()=>{
        navigate('/login');
    }

    const logOut = ()=>{
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error)
        });
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
                <IconButton size='large' sx={{color:colorPalette.primary.main.text}} onClick={startButtonClick}>
                    <NoAccountsIcon />
                </IconButton>
            </div>
        )
    }else{
        console.log("Hello World");
        return(
            <div>
                <IconButton size='large' sx={{color:'#FFFFFF'}} onClick={handleClick}>
                    <AccountCircleIcon />
                </IconButton>
                <Popper open={open} anchorEl={anchorEl}>
                    <Box sx={{ border: 1, p: 1, bgcolor: colorPalette.primary.main.text, zIndex:101,borderRadius:'5px',textAlign:'center',}}>
                        <Link component='button' underline='hover'>
                            Profile Page
                        </Link><br/>
                        <Link component='button' underline='hover'>
                            About Us
                        </Link><br/>
                        <Link component='button' underline='hover' onClick={logOut}>
                            Logout
                        </Link>
                    </Box>
                </Popper>
            </div>
        )
    }
}

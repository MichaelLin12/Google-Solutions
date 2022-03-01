import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import {styled} from '@mui/material/styles';
import '../../css/Appbar.css'
import StartButton from './StartButton.js'

const Styledappbar = styled(AppBar)(({theme}) =>({
    backgroundColor:'#000000',
    display:'flex',
    height:'64px',
}));

export default function Appbar() {

    return (
        <div>
            <Styledappbar position='fixed' elevation={4}>
                <Toolbar>
                    <Typography variant='h4' sx={{flex:1}}>
                        Eden's Garden
                    </Typography>
                    <StartButton/>
                </Toolbar>
            </Styledappbar>
        </div>
    )
}

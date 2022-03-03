import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField } from '@mui/material';
import {styled} from '@mui/material/styles';
import '../../css/Appbar.css'
import StartButton from './StartButton.js';
import Search from './Search.js'

const Styledappbar = styled(AppBar)(({theme}) =>({
    backgroundColor:'#000000',
    display:'flex',
    height:'64px',
}));

export default function Appbar(props) {


    if(!props.searchbar){
        return (
            <div>
                <Styledappbar position='fixed' elevation={4}>
                    <Toolbar>
                        <div className='first'>
                            <Typography variant='h4' sx={{flex:1}}>
                                Eden's Garden
                            </Typography>
                        </div>
                        <StartButton/>
                    </Toolbar>
                </Styledappbar>
            </div>
        )
    }else{
        return (
            <div>
                <Styledappbar position='fixed' elevation={4}>
                    <Toolbar>
                        <div className='first'>
                            <Typography variant='h4' sx={{marginRight:'16px'}}>
                                Eden's Garden
                            </Typography>
                            <Search/>
                        </div>
                        <StartButton/>
                    </Toolbar>
                </Styledappbar>
            </div>
        )
    }
}

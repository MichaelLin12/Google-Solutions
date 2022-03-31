import React,{useEffect,useState} from 'react';
import '../../css/Profile.css'
import Appbar from './Appbar';
import {Paper,List,ListItem, ListItemText} from '@mui/material';
import { doc, getDoc } from "firebase/firestore";
import {db,authentication} from '../../firebase'

export default function Profile() {
    const [profile,setProfile] = useState('');

    useEffect(()=>{
        console.log('render');
        const dataFunc = async()=>{
            const docRef = doc(db, "Users", authentication.currentUser.uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data(), typeof(docSnap.data()));
            let map = docSnap.data();
            delete map.password;
            setProfile(map)
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

        dataFunc();
    },[])

  return (
    <div>
        <Appbar/>
        <div className='studio'>
            <Paper elevation={5} sx={{height:'30rem', width:'25rem'}}>
                <div className='slate'>
                    <List>
                        {Object.entries(profile).map((e)=>{
                            return(
                                <ListItem>
                                    <ListItemText>
                                        {e[0][0].toUpperCase() + e[0].substring(1)} : {e[1]}
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </Paper>
        </div>
    </div>
  )
}

import React,{useState} from 'react';
import { Paper,Button,TextField } from '@mui/material';
import '../../css/Donee.css';
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import {db,authentication} from '../../firebase'

export default function Donate() {
const [description, setDescription] = useState('');
const [address, setaddress] = useState('');
const [zipcode, setzipcode] = useState('');
const [expirationdate, setexpirationdate] = useState('');

const addOrder = async()=>{
  const uid = authentication.currentUser.uid;
  const data = {
    description: description,
    address: address,
    zipcode: zipcode,
    expirationdate: expirationdate,
    uid:uid,
    ordered:false
  }
  console.log("Hello world", data)
  await addDoc(collection(db, "Items"), data);

  setDescription('');
  setaddress('');
  setzipcode('');
  setexpirationdate('');
}

  return (
    <div className='donate'>
      <Paper sx={{height:'20rem', width:'20rem'}}>
        <div className='paper'>
          <TextField variant='filled' rows={5} multiline label='Description' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
          <TextField size='small' variant='filled' label='Address' value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
          <TextField size='small' variant='filled' label='Zipcode' value={zipcode} onChange={(e)=>{setzipcode(e.target.value)}}/>
          <TextField size='small' variant='filled' label='Expiration Date' value={expirationdate} onChange={(e)=>{setexpirationdate(e.target.value)}}/>
          <Button variant="contained" onClick={addOrder}>Place Donation</Button>
        </div>
      </Paper>
    </div>
  )
}

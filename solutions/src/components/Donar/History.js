import React,{useState, useEffect} from 'react'
import { collection, getDocs, doc, updateDoc, getDoc, addDoc, where } from "firebase/firestore";
import {db,authentication} from '../../firebase.js'
import {List, ListItem, Button} from '@mui/material'

export default function History() {
  const [items, setItems] = useState([])
  useEffect(()=>{
    const data = [];
    const getData = async()=>{
      const querySnapshot = await getDocs(collection(db, "History"), where(authentication.currentUser.uid, "==",true));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), typeof(doc.data()));
        const temp = doc.data();
        temp.id = doc.id
        if(temp.ordered === false)
          data.push(temp)
      });
      setItems(data);
    }

    getData();
  },[])


  return (
    <div>
            {
        items.map((item,index)=>{
          return (
            <List>
              {Object.entries(item).map((e,i)=>{
                return (
                  <ListItem key={i}>
                    {e[0]}:{e[1]}
                  </ListItem>
                )
              })}
            </List>
          )
        })
      }
    </div>
  )
}


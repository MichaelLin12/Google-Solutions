import React,{useState, useEffect} from 'react'
import { collection, getDocs, doc, updateDoc, getDoc, addDoc, where, deleteDoc } from "firebase/firestore";
import {db,authentication} from '../../firebase.js'
import {List, ListItem, Button} from '@mui/material'

export default function Cart() {
  const [items, setItems] = useState([])
  const [ordered, setOrdered] = useState(false)

  useEffect(()=>{
    const data = [];
    const getData = async()=>{
      const querySnapshot = await getDocs(collection(db, "Cart"), where(authentication.currentUser.uid, "==",true));
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
  },[ordered])

  const order = async()=>{
    console.log("Hello World",items, typeof(items))
    for(let item of items){
      console.log(item.id,"here",item,items)
      await deleteDoc(doc(db, "Cart", item.id));
    }
    if(ordered){
      setOrdered(false)
    }else{
      setOrdered(true)
    }
  }

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
      <Button variant='contained' onClick={order}>Order</Button>
    </div>
  )
}


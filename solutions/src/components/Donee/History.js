import React,{useState, useEffect} from 'react'
import { authentication,db } from '../../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";
import {List, ListItem} from '@mui/material'

export default function History() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
      const data = []
      const uid = authentication.currentUser.uid;
      const q = query(collection(db, "Items"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), typeof(doc.data));
        data.push(doc.data())
      });
      setItems(data)
    }

    getData();
  },[])


  return (
    <div>
      {items.map((e,i)=>{
        return(
          <List key={i}>
            {Object.entries(e).map((value, index)=>{
              return(
                <ListItem key={index}>
                  {value[0]}:{value[1]}
                </ListItem>
              )
            })}
          </List>
        )
      })}
    </div>
  );
}
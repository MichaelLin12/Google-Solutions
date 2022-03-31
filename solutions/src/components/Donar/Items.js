import React,{useState,useEffect} from 'react'
import { collection, getDocs, doc, updateDoc, getDoc, addDoc } from "firebase/firestore";
import {db,authentication} from '../../firebase.js'
import {List, ListItem, Button} from '@mui/material'

export default function Items() {
  const [items, setItems] = useState([])
  const [ordered, setOrdered] = useState(false);

  useEffect(()=>{
    const data = [];
    const getData = async()=>{
      const querySnapshot = await getDocs(collection(db, "Items"));
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

  const handleOrder= async(id)=>{
    console.log(id)
    const docRef = doc(db, "Items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const washingtonRef = doc(db, "Items", id);
      await updateDoc(washingtonRef, {
        ordered: true
      });
      const temp = docSnap.data();
      temp.uid = authentication.currentUser.uid
      const cartRef = await addDoc(collection(db, "Cart"), temp);
      const historyRef = await addDoc(collection(db, "History"), temp);
      (ordered)? setOrdered(false):setOrdered(true)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
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
              <ListItem>
                <Button variant="contained" onClick={()=>{handleOrder(item.id)}}>
                  Place Order
                </Button>
              </ListItem>
            </List>
          )
        })
      }
    </div>
  )
}


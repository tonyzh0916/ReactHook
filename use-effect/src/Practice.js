import React, {useState, useEffect} from 'react'

export default function App(){
  
  const[resourceType, setResoutceType] = useState('posts');

  useEffect(()=>{
    console.log('onMount'); 
  },[]) //onMount will show only once when the page is rendered. Because the array is empty, That means no state change.
  
  useEffect(()=>{
    console.log('onMount');
  })//onMount will show when the state is changed.

}
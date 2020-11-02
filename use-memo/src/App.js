import React, {useState, useMemo, useEffect} from 'react';

export default function App(){
  const [number, setNumber] = useState(0);
  const [dark, setDark] =  useState(false);
  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(()=>{
    return slowFunction(number);
  },[number])//cache the number if there is no change
  //using this when the function is called really slow

  const themeStyles = useMemo(()=>{
    return {
      backgroundColor :dark ? 'black' : 'white',
      color: dark ? 'white':'black'
    }
  }, [dark])

  useEffect(() => {
    console.log("Theme Changed")
  }, [themeStyles])
  //////////////////////////////////
  //will render themeStyles every time because the themeStyles is an array and reference is different 
  // const themeStyles ={
  //   backgroundColor :dark? 'black' : 'white',
  //   color: dark? 'white':'black'
  // }

  //   useEffect(() => {
  //   console.log("Theme Changed")
  // }, [themeStyles])
///////////////////////////////////////


  return (
    <>
    <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
    <button onClick={()=>setDark(prevDark =>!prevDark)}> Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

const slowFunction = (number)=>{
  console.log('Calling Slow Function')
  for(let i=0; i<=1000000000;i++){}
  return number*2
}





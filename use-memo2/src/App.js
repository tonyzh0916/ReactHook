import React, {useState} from 'react';



export default function App(){
  const [number, setNumber]=useState(0);
  const [dark, setDark] =useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles ={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }

  return (
    <>
      <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(preDark=>!preDark)}> Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
};

const slowFunction=(num)=>{
  console.log("Calling Slow Function");
  for(let i=0;i<=1000000000;i++){
    return num*2;
  }
}

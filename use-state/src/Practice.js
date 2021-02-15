import React , {useState} from 'react';

function App(){
  const [count, setCount] = useState(1); //this is a default value;
  const [number, setNumber] = useState(()=>{
    console.log("Hello");
    return 5;
    //useState can run a function one time when the page render
  })

  const[state, setState] = useState({count:5,color:"blue"})
  const Num = state.count;
  const color = state.color;

  const updateState = ()=>{
    setState((prevState)=>{
      return {...prevState,count:prevState.count+1}
    })
    //if we need to upate the Object value we need to also include the old values using ...prevState
    //but we always set each state which we need to update  a independent varible
  }

  const increaseNumber = ()=>{
      setCount(prevCount => prevCount+1);
  }

  const decreaseNumber = ()=>{
    setCount((prevCount)=>{
      prevCount-1;
    })
  }

  return(
      <>
  <button onClick={increaseNumber}>+</button>
  <span>{count}</span>
  <span>{number}</span>
  <span>{Num}</span>
  <span>{count}</span>
  <button onClick={decreaseNumber}>-</button>
  </>
  )

}
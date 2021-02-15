import React, {useState} from 'react';

const App=()=> {

  const [count, setCount] = useState(4);// render component every time when state is changed
  const [theme, setTheme] = useState('blue');
  const [word, setWord] = useState("where am I?")
  const [isQuestion, setIsQuestion] = useState(true)
  // const [count, setCount] = useState(()=> {
  //   console.log("run function");
  //   return 4;
  // }) 
  //render once 

  const decrementCount=()=>{
    // setCount(count-1);
    setCount(prevCount => prevCount-1);
    return count;
  }

  const incrementCount=()=>{
    setCount(prevCount => prevCount+1);
  }

  const handleWordClick=(e)=>{
    console.log('e => ',e );
    if(isQuestion){
      setWord("New York");
      setIsQuestion(false);
    }else{
      setWord("Where am I?");
      setIsQuestion(true);
    }
  
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
    <button onClick={incrementCount}>+</button>
    <span onClick={handleWordClick}>{word}</span>
    </>
  );
}

export default App;


/* 
if the init sate is an object
const App =()=>{
  const [state, setState] = useState({count:4, theme:"blue"})

  const decremenCount(){
    setState(preState =>{
      return {...prevState, count:prevState.count-1}  //setSate will overwrite the state if no ...prevSate
    })
  }
}
*/
